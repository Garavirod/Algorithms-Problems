#include<bits/stdc++.h>
using namespace std;


/*
    1) 1 is not a prime number
    2) No number dvided by 2 whom rest is 0 is a prime number, except 2. 
       this way you will omit the pairs numbers.
    3) Verify with odd numbers from 3 until sqrt(N) for reducing the number of iterations.

    WHY WITH ODD NUMBERS?
    Beacuse with prime numbers we can form the rest of the numbers, so if we
    divide a number by one prime number and its rest is 0 that's mean the number was fromed
    for a prime number and it can't be a prime beacuse a prime number is divisible by 1 and the 
    same number.
*/

bool isPrime(int N){
    if(N<2||(N%2==0&&N!=2))
       return false;
    for(int i = 3; i*i<=N; i=i+2) //it satrs to iterate when N is 9
        if(N%i==0)
            return false;
    return true;
}

int main(int argc, char const *argv[])
{
    int N;
    cin>>N;
    if(isPrime(N)) cout<<"Is a prime number"<<endl;
    else cout<<"Is not a prime number"<<endl;

    return 0;
}
