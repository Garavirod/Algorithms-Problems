#include <bits/stdc++.h>
using namespace std;

int C[10000001];
int N = 10000000;

/*
    Cada iteracion de i c[i] es una factor primo que divide al numero c[j]
    Ese numero se supondrá como el primo máximo que divide a c[j]
    se supondrá porue psiblemente en otra iteración habrá otro numero j que sea
    divisiro máximio de c[j]

*/
void iniciar_criba()
{
    for (int i = 0; i <= N; i++)
        C[i] = i;
    C[0] = -1;
    C[1] = -1;
    for (int i = 2; i * i <= N; i++)
        if (C[i] == i)
            for (int j = i + i; j <= N; j += i)
                C[j] = i;
}

// Conjunto de factores primos y su multiplicadad para todo x > 1
void fp(int X)
{
    if (X <= 1)
        return;
    int a = 1;
    int Y = X / C[X];
    while (C[X] == C[Y])
    {
        a++;
        Y = Y / C[Y];
    }
    fp(Y);
    cout << C[X] << " ^ " << a << endl;
}



int main(int argc, char const *argv[])
{
    int x;
    iniciar_criba();
    while (cin >> x)    
        fp(x);
    
    return 0;
}
