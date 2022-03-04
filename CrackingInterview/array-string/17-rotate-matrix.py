#!/usr/bin/python3
from copy import deepcopy
"""  
    7.- Rotate matrix

    Given an image represented by an NxN 
    matrix, where each pixel in the image 
    is 4 bytes, write a method to rotate 
    the image by 90 degrees. 
    Can you do this in place?
"""

def rotate_matrix( matrix: list ) -> list :
    matrix_length = len(matrix)
    matrix_copy =  deepcopy(matrix)

    it,i,k,p,j = 0, 0, 0, 0, (matrix_length - 1)
    iterations = matrix_length**2 

    while it < iterations:
        matrix_copy[i][j] = matrix[p][k]        
        k += 1
        i += 1
        if k == matrix_length:
            j -= 1
            i = 0
            k = 0
            p += 1

        it += 1

    return matrix_copy  


if __name__ == '__main__':
    input_matrix = [        
        [ 5, 1, 9,11],
        [ 2, 4, 8,10],
        [13, 3, 6, 7],
        [15,14,12,16]
    ]
    print(rotate_matrix(input_matrix))