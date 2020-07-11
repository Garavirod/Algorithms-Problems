#include<bits/stdc++.h>
using namespace std;

int isGeometricProgressive(vector<long> &v, int r){
    for(long i=0; i<v.size()-1; i++)
        if(v[i+1]!=v[i]*r)
            return 0;
    return 1;
}


// Complete the countTriplets function below.
long countTriplets(vector<long> &arr, long r) {
    long N = arr.size();
    long c = 0;
    string bitmask(3,1);
    bitmask.resize(N,0);
    do{
        vector<long> triplete;
        for(long i=0; i<N; i++)
            if(bitmask[i])
                triplete.push_back(arr[i]);
        if(isGeometricProgressive(triplete,r))
            c++;
    }while(prev_permutation(bitmask.begin(),bitmask.end()));
    return c;
}



int main(int argc, char const *argv[])
{
    vector<long> d = {1,3, 9, 9, 27, 81};
    cout<<countTriplets(d,3)<<endl;
    return 0;
}
