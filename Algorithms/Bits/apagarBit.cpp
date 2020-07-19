#include<iostream>
using namespace std;


int turn_off_bit(int n, int b){
    int w = 1<<b-1; //Desplazamos el número '1' (n-1) bits a la izquierda
    int new_numb = n&~w; //invertimos el número 'w' para realizar la operación and con el numero n
    return new_numb;
}

int turn_on_bit(int n, int b){
    int w = 1<<b-1; //Desplazamos el número '1' (n-1) bits a la izquierda
    int new_numb = n|w; // realizar la operación or con el numero n
    return new_numb;
}

int main(int argc, char const *argv[])
{   // 8 4 2 1 = BINARY
    // 1 1 1 1 = 15 
    // 0 1 1 1 = 7
    // 1 0 0 1 = 9
    // 1 1 0 1 = 13
    int n1 = 15;
    int n2 = 9;
    int new_number_turn_off = turn_off_bit(n1,1);
    cout<<"Result number of turn off >: "<<new_number_turn_off<<endl;

     int new_number_turn_on = turn_on_bit(n2,3);
    cout<<"Result number of turn on >: "<<new_number_turn_on<<endl;
    return 0;
}
