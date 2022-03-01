#include<bits/stdc++.h>

using namespace std;
void quickSort(vector<int> &v, int first , int last){        
    int piv = (v.size()-1)/2;
    if(arr)
    while(first!=last){
        if(v[first]<v[piv]){
            first++;
        }else if(v[last]>v[piv]){
            last--;
        }else{
            swap(v[first],v[last]);
            first++;
            last--;
        }
    }
    quickSort(v,first,piv-1);
    quickSort(v,piv+1,last);
}



int main(int argc, char const *argv[])
{
    vector<int> arr = {4,3,5,6,8,2,1,7};
    quickSort(arr,0,arr.size()-1);  

    for(auto s: arr){
        cout<<s<<endl;
    }
    return 0;
}
