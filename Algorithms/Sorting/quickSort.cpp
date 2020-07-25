#include<bits/stdc++.h>

using namespace std;
void quickSort(vector<int> &v, int first , int last){        
    if(first<last){
        int piv = (v.size()-1)/2;
        if(v[first]>v[piv]){
            first++;
        }else if(v[last]<v[piv]){
            last--;
        }else{
            swap(v[first],v[last]);
        }
        quickSort(v,first,piv-1);
        quickSort(v,piv+1,last);
    }


}



int main(int argc, char const *argv[])
{
    
    return 0;
}
