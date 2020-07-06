#include<iostream>
#include<vector>
using namespace std;

vector<vector<int>> possibilities;

bool isPrime(int a){
    bool _prime = true;
    for (int i = 2; i <= a / 2; ++i) {
      if (a % i == 0) {
         _prime = false;
         break;
      }
   }
   return _prime;
}

void backTracking(int n, vector<int> &ln, vector<int> &pn){
    if(ln.empty()){
        pn.push_back(n);
        possibilities.push_back(pn);        
    }else{
        for(int i=0; i<ln.size(); i++){
            if(isPrime(ln[i]+n)){
                vector<int> _pn2 = pn;
                vector<int> _ln2 = ln;
                _ln2.erase(_ln2.begin()+i);
                _pn2.push_back(i);
                backTracking(i,_ln2,_pn2);
            }
        }
    }
    return;
}



 int main(int argc, char const *argv[])
 {
     vector<int> a = {2,3,4,5,6};
     vector<int> b;
     backTracking(1,a,b);
        
     for (size_t i = 0; i < possibilities.size(); i++)
     {  
        cout<<" CASE "<<i+1<<endl;
        for (int j = 0; j < possibilities[i].size(); j++)
        {
            cout<<possibilities[i][j]<<" ";
        }
        
     }
     
     
     return 0;
 }
 