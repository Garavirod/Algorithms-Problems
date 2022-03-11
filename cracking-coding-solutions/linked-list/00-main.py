from datastructures import DataStructures
if __name__ == '__main__':
    list = DataStructures.LinkedList()

    list.append(1)
    list.append(2)
    list.append(3)
    list.append(4)
    list.append(4)
    list.append(4)
    list.append(4)

    list.remove_duplicates()

    list.print()