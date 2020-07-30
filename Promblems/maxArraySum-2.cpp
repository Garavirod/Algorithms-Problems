#include<bits/stdc++.h>

using namespace std;

vector<long> dp (100000,0); 
vector<bool> v (100000,false);


long maxArraynotAdj(vector<long> &arr, long idx, long n){
    if(idx>=n)
        return 0;
    else if(v[idx])
        return dp[idx];
    else{
        v[idx]=true;
        dp[idx] = max(maxArraynotAdj(arr,idx+1,n),arr[idx]+maxArraynotAdj(arr,idx+2,n));
        return dp[idx];
    }
}

int main(int argc, char const *argv[])
{
    vector<long> arr;
    int N;
    cin>>N;
    while(N--){
        long a;
        cin>>a;
        arr.push_back(a);
    }

    cout<<maxArraynotAdj(arr,0,arr.size())<<endl;
    return 0;
}
