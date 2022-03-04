#!/usr/bin/python3

"""  
    8.- Zero matrix
    
    Write an algorithm such that if an element in 
    an MxN matrix is 0, its entire row and column 
    are set to 0.
"""

from copy import copy


def zero_matrix( matrix: list ) -> list:
    zero_row = [0]*len(matrix[0])    
    row_to_repleace = []
    for i,row in enumerate(matrix):
        for j,item in enumerate(row):
            if item == 0:
                row_to_repleace.append([i,j])

    for i in row_to_repleace:
        matrix[i] = zero_row



if __name__ == '__main__':
    input_matrix = [  

        [1,2,3,4],
        [5,0,7,8],
        [6,1,1,2],
        [2,3,4,0]
    ]

    zero_matrix(input_matrix)

    print(input_matrix)
