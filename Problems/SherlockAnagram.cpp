#include <bits/stdc++.h>
using namespace std;

vector<char> getStringVec(string s){
    vector<char> v;
    for(int i=0;i<s.length(); i++)
        v.push_back(s[i]);    
    return v;    
}

int sherlockAndAnagrams(string w) {
    int c=0;
    map<vector<char>,int> _map;
    map<vector<char>,int>::iterator it;

    for(int i=0; i<w.length(); i++){
        for(int j=0; j<w.length()-i; j++){        
            vector<char> v = getStringVec(w.substr(j,i+1));
            sort(v.begin(),v.end());
            if(_map.find(v)!=_map.end())                
                _map[v]++;
            else
                _map.insert(make_pair(v,1));                        
        }
    }
    
    for(it =_map.begin(); it != _map.end(); it++)
        c += (it->second)*(it->second-1)/2;    
    return c;

}

int main(int argc, char const *argv[])
{
    string w;
    cin>>w;
    cout<<sherlockAndAnagrams(w)<<endl;  
    return 0;
}
