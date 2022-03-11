#!/usr/bin/python3

class Node:
    def __init__(self, value=None) -> None:
        self.next = None
        self.value = value

class LinkedList:
    def __init__(self) -> None:
        self.head = None
        self.size = 0

    def is_empty(self) -> bool:
        return self.head == None

    def append(self, value: any) -> Node:
        new_node = Node(value)
        if self.is_empty():
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node
        self.size += 1
        return self.head


    def remove(self,keyvalue: any) -> Node:
        current = self.head

        if not self.is_empty():
            if current.value == keyvalue:
                self.head = current.next
                current = None
            else:                
                while current.next:
                    if current.value == keyvalue:                                                                                                                                                                        
                        break     
                    prev = current                
                    current = current.next
                if current.value == keyvalue:
                    prev.next = current.next
                    current = None

        return self.head


    def remove_duplicates(self):
        if not self.is_empty():
            current = self.head
            duplicates = {}

            while current.next:
                duplicates[current.value] = duplicates.get(
                    current.value,0) + 1
                current = current.next

            duplicates[current.value] = duplicates.get(
                current.value,0) + 1

            for key in duplicates:
                if duplicates[key] > 1:                   
                    self.head = self.remove(duplicates[key])
                    
        return self.head

    def print(self) -> None:
        if not self.is_empty():
            current = self.head
            while current.next:
                print(current.value)
                current = current.next
            print(current.value)

    
        

