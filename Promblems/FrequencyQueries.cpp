#include <bits/stdc++.h>
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



int main(int argc, char const *argv[])
{
    
    return 0;
}
