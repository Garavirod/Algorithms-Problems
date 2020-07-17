#include <bits/stdc++.h>
using namespace std;

vector<int> freqQuery(vector<vector<int>> &queries) {
    map<long,long> _map, _ocurr;
    vector<int> arr;
    for (auto q: queries){
        if(q[0]==1){
            if(_map.find(q[1]) != _map.end()){
                _map.insert(make_pair(q[1],1));
                _ocurr.insert(make_pair(1,q[1]));
            }
            else{
                _map[q[1]]++;
                _ocurr.insert(make_pair(_map[q[1]],q[1]));
            }
            
        }else if(q[0]==2 && _map.find(q[1]) !=_map.end()){
            _map[q[1]]--;
            _ocurr.insert(make_pair(_map[q[1]],q[1]));
        }else{
            if(_ocurr.find(q[1])!= _ocurr.end())
                arr.push_back(0);
            else            
                arr.push_back(1);                        
        }
    }
    return arr;

}

int main(int argc, char const *argv[])
{
    vector<vector<int>> queries = {{1,1},{2,2},{3,2},{1,1},{1,1},{2,1},{3,2}};
    vector<int> r = freqQuery(queries);

    for(auto e: r)
        cout<<e<<endl;

    return 0;
}
