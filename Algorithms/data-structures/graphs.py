class GraphAdyacentMatrix:
    """ Non ponderated graph based on Adyacent Matrix"""
    def __init__(self, vertex):
        self.__num_vertex = vertex        
        self.__matrix = [[0 for j in range(vertex)] for i in range(vertex)]

    def printGraph(self):
        for row in self.__matrix:
            print(row)

    def addVertex(self,v1,v2):
        self.__matrix[v1][v2] = 1

class GraphAdyacentList:
    """ Non ponderated graph based on Adyacent List"""
    def __init__(self, vertex):
        self.__num_vertex = vertex             
        self.__matrix = [[] for i in range(vertex)]

    def printGraph(self):
        """
            Description
            -----------
            Prints aydacent list of each graph's vertex
            Parameters
            ----------
            None            
            Returns
            -------
            void
        """
        for i in range(len(self.__matrix)):
            output = 'v{} - {}'.format(i,self.__matrix[i])
            print(output)

    def addVertex(self,v,adyacent_list):
        """
            Description
            -----------
            Add a list of vertex into soceifi vertex
            Parameters
            ----------
            param1: int 
                index of vertex incidence
            param2 : arr
                array of aydacent vertex
            Returns
            -------
            void
        """
        self.__matrix[v] = adyacent_list
    
    def bfs(self,vertex):
        """ 
            Description
            -----------
            Breadth first search O(v+e)
            Una búsqueda en anchura (BFS) es un algoritmo de búsqueda para 
            lo cual recorre los nodos de un grafo, comenzando en la raíz 
            (eligiendo algún nodo como elemento raíz en el caso de un grafo), 
            para luego explorar todos los vecinos de este nodo. A continuación, 
            para cada uno de los vecinos se exploran sus respectivos vecinos 
            adyacentes, y así hasta que se recorra todo el grafo. 
            Cabe resaltar que si se encuentra el nodo antes de recorrer 
            todos los nodos, concluye la búsqueda.
            Parameters
            ----------
            vertex: int
                root vertex index (reference)
            Returns
            -------
            void

        """
        visited = [-1 for i in range(self.__num_vertex)]
        queue = list()
        u,v = None, None
        queue.append(vertex)
        visited[vertex] = 0
        while queue:
            u = queue.pop(0)
            for i in range(len(self.__matrix[u])):
                v = self.__matrix[u][i]
                if visited[v] == -1:
                    visited[v] = visited[u] + 1
                    queue.append(v)

        print(visited)

if __name__ == '__main__':
    # Adyacent Matrix
    g = GraphAdyacentMatrix(4)
    g.addVertex(0,3)
    g.addVertex(3,1)
    g.addVertex(2,1)
    g.printGraph()

    # Adyacent List
    g2 = GraphAdyacentList(10)
    g2.addVertex(0,[9,1])
    g2.addVertex(1,[0,8,2,3])
    g2.addVertex(2,[1])
    g2.addVertex(3,[1,4,5,6])
    g2.addVertex(4,[3])
    g2.addVertex(5,[3])
    g2.addVertex(6,[7,3,9])
    g2.addVertex(7,[6])
    g2.addVertex(8,[1])
    g2.addVertex(9,[0,6])    
    g2.printGraph()
    g2.bfs(5)



    