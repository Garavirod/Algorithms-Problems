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
long countTriplets(vector<long> &arr, long r) {
    long N = arr.size();
    long c = 0;    
    map<long,long> leftMap;
    map<long,long> rightMap = Counter(arr);
    leftMap.insert(make_pair(arr[0],1));
    for(long a = 1; a<arr.size()-1; a++){
        rightMap[arr[a]]--;
        long i = arr[a]/r;
        long k = arr[a]*r;

        c += leftMap[i]*rightMap[k];        

        if(leftMap.find(arr[a]) == leftMap.end())
            leftMap.insert(make_pair(arr[a],1));
        else
            leftMap[a]++;        
    }
    return c;
}



int main(int argc, char const *argv[])
{
    vector<long> d = {1,3, 9, 9, 27, 81};
    cout<<countTriplets(d,3)<<endl;
    return 0;
}
