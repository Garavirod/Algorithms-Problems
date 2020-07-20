#include<bits/stdc++.h>

using namespace std;

void getCriba(vector<bool> &primes){
    int N = primes.size();
    for(int i=2; i*i<=N; i++)
        if(primes[i])
            for(int j=2; (j*i)<=N; j++)
                primes[j*i]=false;
}

int main(int argc, char const *argv[])
{
    int N;
    cin>>N;
    vector<bool> primes (N+1,true);
    primes[0] = false;
    primes[1] = false;
    getCriba(primes);
    for(int i=0; i<primes.size(); i++)
        if(primes[i])
            cout<<i<<" ";
    return 0;
}
