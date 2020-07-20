#include <bits/stdc++.h>
using namespace std;

/*
    Cada iteracion de i c[i] es una factor primo que divide al numero c[j]
    Ese numero se supondrá como el primo máximo que divide a c[j]
    se supondrá porue psiblemente en otra iteración habrá otro numero j que sea
    divisiro máximio de c[j]

*/

void init_Cirba(vector<int> &c, int N){
    for(int i=2; i*i<=N; i++){
        if(c[i]==i)
            for(int j = 2; (j*i)<=N; j++)
                c[j] = i;
    }
}

// Conjunto de factores primos y su multiplicadad para todo x > 1

void prime_Factors(int X, vector<int> &c){
    if(X<=1) return;
    int a = 1;
    int Y = X/c[X];
    while(c[X]==c[Y]){
        a++;
        Y = Y/c[Y];
    }
    prime_Factors(Y, c);
    cout<<c[X]<<"^"<<a<<endl;
}


int main(int argc, char const *argv[])
{
    int N = 10000;
    vector<int> c;
    for(int i=0; i<=N; i++) c.push_back(i);
    c[0] = c[1] = -1;
    init_Cirba(c,N+1);
    int n;
    while (cin>>n)    
        prime_Factors(n,c);    
    return 0;
}
