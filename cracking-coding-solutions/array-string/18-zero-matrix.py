#!/usr/bin/python3

"""  
    8.- Zero matrix
    
    Write an algorithm such that if an element in 
    an MxN matrix is 0, its entire row and column 
    are set to 0.
"""

def zero_matrix( matrix: list ) -> list:
    row_flag = [False]*len(matrix)    
    col_flag = [False]*len(matrix[0])

    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            if matrix[i][j] == 0:
                if not row_flag[i]:
                    row_flag[i] = True
                col_flag[j] = True

    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            if row_flag[i]:
                matrix[i][j] = 0
            elif col_flag[j]:
                matrix[i][j] = 0               


if __name__ == '__main__':
    input_matrix = [  

        [1,2,3,4],
        [5,0,7,8],
        [6,1,1,2],
        [2,3,4,0]
    ]

    zero_matrix(input_matrix)

    print(input_matrix)
