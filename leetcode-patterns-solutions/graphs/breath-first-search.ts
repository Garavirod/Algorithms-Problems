export class BFS{
    visited: Set<any>;
    queue:any[];
    graph:Object;
    constructor(graph:Object, root:any){
        this.graph = graph;
        this.queue = [root];
        this.visited = new Set(root);
        this.init();
    }

    private init(){
        while(this.queue.length > 0){
            //queue front extraction
            const vertex = this.queue.shift();
            //For each vertex's adyacent list
            for(let neighbour of this.graph[vertex]){
                if(!this.visited.has(neighbour)){
                    this.visited.add(neighbour);
                    this.queue.push(neighbour);
                }
            }
        }
    }
}