#include<bits/stdc++.h>
using namespace std;


int maxArraysum(vector<int> &v){
    if(v.size()==2)
        return v[0]+v[1];
    else{
        int m = 0;
        for(auto e: v)
            m+=e;
        for(int i=0; i<v.size(); i++){
            vector<int> v2 = v;
            v2.erase(v2.begin()+i);
            m = max(m,maxArraysum(v2));
        }
        return m;

    }
}

int main(int argc, char const *argv[])
{
    int N;
    cin>>N;
    vector<int> v,v1,v2;
    while (N--)
    {
        int n;
        cin>>n;
        v.push_back(n);
    }   
    
    for(int it = 0; it<v.size(); it+=2){
        v1.push_back(v[it]);
        cout<<"v1 "<<v[it]<<endl;
    }

    for(int it = 1; it<v.size(); it+=2){
        v1.push_back(v[it]);
        cout<<"v2 "<<v[it]<<endl;
    }

    cout<<"dasjhdkjhsakjd"<<endl;
    
    
    int m = max(maxArraysum(v1),maxArraysum(v2));

    cout<<m<<endl;
    return 0;
}
