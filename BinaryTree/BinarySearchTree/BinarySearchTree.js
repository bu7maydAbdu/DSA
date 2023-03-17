class Node {
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}


class BST{
    constructor(value){
        this.root = new Node(value)
        this.count = 0
    }

    size(){
        return this.count
    }
    insert(value){
        //inrease tree count of nodes by 1
        this.count++
        //declare new node
        let newNode = new Node(value)
        const searchTree = node => {
            //if the value less the value of the parent node value then it's a left node 
            if(value < node.value){
                //if the left node doesn't exist then asign a value to it if it exists go even more and search the tree using the left node as aparent node 
                if(!node.left){
                    node.left = newNode
                }else{ 
                    searchTree(node.left)
                }
            //if the value less the value of the parent node value then it's a right node 
            }else if(value > node.value){
                //if the left node doesn't exist then asign a value to it if it exists go even more and search the tree using the left node as aparent node 
                if(!node.right){
                    node.right = newNode
                }else{
                    searchTree(node.right)
                }
            }
        }
        // use the search tree function on the root node
        searchTree(this.root)
    }


    min(){

     let currentNode = this.root
     while(currentNode.left){
        currentNode = currentNode.left
     }
     return currentNode

    }

    max(){

        let currentNode = this.root
        while(currentNode.right){
           currentNode = currentNode.right
        }
        return currentNode

    }

    contains(value){
        let currentNode = this.root
        while(currentNode){
            if(value === currentNode.value){
                return true
            }
            if(value < currentNode.value){
                currentNode = currentNode.left
            }else {
                currentNode = currentNode.right
            }
        }

        return false
    }
}