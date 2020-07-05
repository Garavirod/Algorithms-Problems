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
}

void backTracking(int n, vector<int> &ln, vector<int> &pn){
    if(ln.empty()){
        possibilities.push_back(pn);
        return;
    }else{
        for(int i=0; i<ln.size(); i++){
            vector<int> _lp = ln;
            vector<int> _pn2;
            if(isPrime(ln[i]+n)){
                _lp.erase(_lp.begin()+i);
                _pn2.push_back(i);
                vector<int> _ln2 = _lp;
                backTracking(i,_ln2,_pn2);
            }
        }
    }
}



 int main(int argc, char const *argv[])
 {
     vector<int> a;

     for (size_t i = 0; i < 5; i++)
     {
         a.push_back(i);
     }

     a.erase(a.begin()+ 2);
     for (size_t i = 0; i < a.size(); i++)
     {  
        cout<<a[i]<<endl;
     }
     
     
     return 0;
 }
 