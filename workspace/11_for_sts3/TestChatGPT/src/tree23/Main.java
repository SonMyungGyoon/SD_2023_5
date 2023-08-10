package tree23;
import javax.swing.*;
import java.awt.*;
import java.util.ArrayList;

class TreeNode {
	private int[] keys;
    private int keyCount;
    private TreeNode[] children;
    private boolean leaf;
    private TreeNode root; // root 변수 추가

    public TreeNode(int degree) {
        keys = new int[degree - 1];
        keyCount = 0;
        children = new TreeNode[degree];
        leaf = true;
        root = null; // root 변수 초기화
    }	

    public void insert(int key) {
        TreeNode current = root;
        if (current == null) {
            root = new TreeNode(keys.length);
            root.keys[0] = key;
            root.keyCount = 1;
        } else {
            if (current.keyCount == keys.length) {
                TreeNode newRoot = new TreeNode(keys.length);
                newRoot.children[0] = root;
                root = newRoot;
                splitChild(0, root);
                insertNonFull(root, key);
            } else {
                insertNonFull(current, key);
            }
        }
        draw();
    }

    private void splitChild(int childIndex, TreeNode parentNode) {
        TreeNode childNode = parentNode.children[childIndex];
        TreeNode newNode = new TreeNode(keys.length);

        newNode.leaf = childNode.leaf;
        newNode.keyCount = (keys.length - 1) / 2;

        for (int i = 0; i < newNode.keyCount; i++) {
            newNode.keys[i] = childNode.keys[i + newNode.keyCount + 1];
            childNode.keys[i + newNode.keyCount + 1] = 0;
        }

        if (!childNode.leaf) {
            for (int i = 0; i <= newNode.keyCount; i++) {
                newNode.children[i] = childNode.children[i + newNode.keyCount + 1];
                childNode.children[i + newNode.keyCount + 1] = null;
            }
        }

        for (int i = parentNode.keyCount; i > childIndex; i--) {
            parentNode.children[i + 1] = parentNode.children[i];
        }

        parentNode.children[childIndex + 1] = newNode;

        for (int i = parentNode.keyCount - 1; i >= childIndex; i--) {
            parentNode.keys[i + 1] = parentNode.keys[i];
        }

        parentNode.keys[childIndex] = childNode.keys[newNode.keyCount];
        childNode.keys[newNode.keyCount] = 0;

        childNode.keyCount = newNode.keyCount;

        parentNode.keyCount++;
    }

    private void insertNonFull(TreeNode node, int key) {
        int i = node.keyCount - 1;
        if (node.leaf) {
            while (i >= 0 && key < node.keys[i]) {
                node.keys[i + 1] = node.keys[i];
                i--;
            }
            node.keys[i + 1] = key;
            node.keyCount++;
        } else {
            while (i >= 0 && key < node.keys[i]) {
                i--;
            }
            i++;
            if (node.children[i].keyCount == keys.length - 1) {
                splitChild(i, node);
                if (key > node.keys[i]) {
                    i++;
                }
            }
            insertNonFull(node.children[i], key);
        }
    }

    public void draw() {
        SwingUtilities.invokeLater(() -> {
            JFrame frame = new JFrame("2-3 Tree Visualization");
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

            TreePanel treePanel = new TreePanel(this);
            frame.add(treePanel);

            frame.pack();
            frame.setLocationRelativeTo(null);
            frame.setVisible(true);
        });
    }
}

class TreePanel extends JPanel {
    private TreeNode root;
    private ArrayList<ArrayList<Integer>> levels;

    public TreePanel(TreeNode root) {
        this.root = root;
        levels = new ArrayList<>();
        buildLevels(root, 0);
    }

    private void buildLevels(TreeNode node, int level) {
        if (level >= levels.size()) {
            levels.add(new ArrayList<>());
        }
        for (int i = 0; i < node.keyCount; i++) {
            levels.get(level).add(node.keys[i]);
        }
        if (!node.leaf) {
            for (int i = 0; i <= node.keyCount; i++) {
                if (node.children[i] != null) {
                    buildLevels(node.children[i], level + 1);
                }
            }
        }
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);

        int nodeWidth = 40;
        int nodeHeight = 20;
        int levelGap = 60;
        int nodeGap = 30;

        int startX = getWidth() / 2 - levels.get(0).size() * nodeGap / 2;
        int startY = 50;

        for (int level = 0; level < levels.size(); level++) {
            ArrayList<Integer> currentLevel = levels.get(level);
            int levelWidth = currentLevel.size() * nodeGap - (nodeGap - nodeWidth);
            int levelStartX = startX + (levelGap - levelWidth) / 2;

            for (int i = 0; i < currentLevel.size(); i++) {
                int nodeX = levelStartX + i * nodeGap;
                int nodeY = startY + level * levelGap;
                g.setColor(Color.WHITE);
                g.fillRect(nodeX, nodeY, nodeWidth, nodeHeight);
                g.setColor(Color.BLACK);
                g.drawRect(nodeX, nodeY, nodeWidth, nodeHeight);

                String text = String.valueOf(currentLevel.get(i));
                int textWidth = g.getFontMetrics().stringWidth(text);
                int textHeight = g.getFontMetrics().getHeight();
                int textX = nodeX + (nodeWidth - textWidth) / 2;
                int textY = nodeY + (nodeHeight - textHeight) / 2 + g.getFontMetrics().getAscent();
                g.drawString(text, textX, textY);
            }
        }
    }

    @Override
    public Dimension getPreferredSize() {
        int width = levels.get(0).size() * 30;
        int height = levels.size() * 60;
        return new Dimension(width, height);
    }
}

public class Main {
    public static void main(String[] args) {
        TreeNode root = new TreeNode(2);
        root.insert(10);
        root.insert(20);
        root.insert(30);
        root.insert(40);
        root.insert(50);
        root.insert(60);

        SwingUtilities.invokeLater(() -> {
            JFrame frame = new JFrame("2-3 Tree Visualization");
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

            TreePanel treePanel = new TreePanel(root);
            frame.add(treePanel);

            frame.pack();
            frame.setLocationRelativeTo(null);
            frame.setVisible(true);
        });
    }
}


