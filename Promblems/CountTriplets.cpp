#include<bits/stdc++.h>
using namespace std;

map<long,long> Counter (vector<long> &v){
    map <long,long> _map;
    for(auto x: v){
        if(_map.find(x)==_map.end())
            _map.insert(make_pair(x,1));        
        else
            _map[x]++;
    }
    return _map;
}


// Complete the countTriplets function below.
long countTriplets(vector<long> arr, long r) {
    long c = 0;    
    sort(arr.begin(),arr.end());
    map<long,long> leftMap;
    map<long,long> rightMap = Counter(arr);     
    for(auto a: arr){
        long i = a/r;
        long k = a*r;
        rightMap[a]--;  //We remove an item from rightMap      
        if(leftMap[i] and rightMap[k] and !(a%r))
            c += leftMap[i]*rightMap[k]; 
        leftMap[a]++;        
    }
    return c;
}



int main(int argc, char const *argv[])
{
    // vector<long> d {1,3,3,9,9,9,27,81};
    // cout<<countTriplets(d,3)<<endl;
    map<int,int> as;
    as.insert(make_pair(2,5));
    as.contains(2);

    return 0;
}
