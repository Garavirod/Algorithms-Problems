#include<bits/stdc++.h>
using namespace std;


/*
    TWO POINTERS TECHNIQUE - EQUIDIRECTIONAL
    Time complexity takes O(N)
    Given an array find the subarray of k size such that it adds up the maximum.
*/

int ksizeWindows(vector<int> &v, int k){
    vector<int>::iterator _start = v.begin();
    vector<int>::iterator _end = v.begin() + k;
    int _wsum = 0;
    for(int i = 0; i<k; i++) _wsum += v[i];
    int _maxsum = _wsum;    
    while(_end != v.end()){
       _wsum += (*(_end) - *_start);
       _maxsum = max(_wsum,_maxsum);        
       _start++;
       _end++;
    }
    return _maxsum;
}

int main(int argc, char const *argv[])
{
    vector<int> _v = {1,9,-1,-2,7,3,-1,2};
    int _msum = ksizeWindows(_v,4);
    cout<<_msum<<endl;
    return 0;
}

