#include <bits/stdc++.h>

using namespace std;

vector<string> split_string(string);

/*
    GCD (Greatest common divisor)
        It is the positive integer greatest which divide a and b 
        GCD(a,b)= d -> d|a ^ d|b

    LCM (Lowest common multiple)    
        It is lowest positive integer which is divided by a and b 
        LCM(a,b) = d -> a|d ^ b|d 
*/
int GCD(int a , int b) {
    if(b==0) return a;
    return GCD(b,a%b);       
}

int LCM(int a, int b){
    return a*(b/LCM(a,b));
}

int main(int argc, char const *argv[])
{
    int a,b;
    int opc;
    cout<<"GCD [1] LCM [2] :> ";
    cin>>opc;
    switch (opc)
    {
    case 1:
        while (cin>>a>>b)    
            cout<<GCD(a,b)<<endl;
        break;
    case 2:
        while (cin>>a>>b)    
            cout<<LCM(a,b)<<endl;
    default:
        break;
    }

    
    
}
