#include <bits/stdc++.h>

using namespace std;

string timeConversion(string s) {
    if(s.substr(s.size()-2,s.size()-1) == "AM"){
        s.replace(s.size()-2,s.size()-1,"");
        if(s.substr(0, 2) == "12"){
            s.replace(0,2,"00");            
            return s;
        }
        return s;        
    }else{
        s.replace(s.size()-2,s.size()-1,"");
        if(s.substr(0, 2) == "12")
            return s;        
        int hr = stoi(s.substr(0,2));
        if (hr == 0) hr = stoi(s.substr(1,1));            
        else hr = stoi(s.substr(0,2));
        hr = hr + 12;
        s.replace(0,1,"");
        s.replace(0,1,to_string(hr));
        return s;
    }

}


int main(int argc, char const *argv[])
{
    string s = "11:59:59PM";
    cout<<timeConversion(s)<<endl;
    return 0;
}


