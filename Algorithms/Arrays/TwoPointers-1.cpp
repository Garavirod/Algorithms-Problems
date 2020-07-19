#include<bits/stdc++.h>
using namespace std;

/*
    TWO POINTERS THECNIQUE - OPOSITE DIRECTIONAL    
    THIS THECNIQUE TAKE O(N) 
    Find two nombers into an array such that they add up to a spaceific target
    and retunr thier index of each one.
*/


void TwoSum(vector<int> &v, int target, pair<int,int> &idx){
    bool flag = true;
    int i = 0, j=v.size()-1;
    sort(v.begin(), v.end());
    vector<int> ::iterator it1 = v.begin();
    vector<int> ::iterator it2 = v.end()-1;    
    while (flag)
    {
        int sum = (*it1) + (*it2);
        if(sum == target){
            idx = make_pair(i,j);
            flag = false;
        }else if(sum>target){
            it2--;
            j--;
        }else{
            it1++;
            i++;
        }                
    }    
}


int main(int argc, char const *argv[])
{
    vector<int> r = {2,3,4,5,6,8,12,34};
    pair<int,int> idx;
    TwoSum(r,15,idx);
    cout<<idx.first<<" "<<idx.second<<endl;

    return 0;
}
