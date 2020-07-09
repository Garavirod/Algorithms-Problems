#include <bits/stdc++.h>
using namespace std;

vector<char> getStringVec(string s){
    vector<char> v;
    for(int i=0;i<s.length(); i++)
        v.push_back((char)s[i]);    
    // for(auto x : v)
    //     cout<<x<<" ";
    // cout<<endl;
    return v;
    
}


// Complete the sherlockAndAnagrams function below.
int sherlockAndAnagrams(string word) {
    map<vector<char>, int> dict;
    int c = 0;
    for (int i = 0; i < word.length(); i++)
    {
        for (int j = 1; j <= word.length() - i; j++)
        {
            vector<char> k = getStringVec(word.substr(i, j));   
            sort(k.begin(),k.end());          
            if (dict[k] != 0)
            {
                c++;
                dict[k] = dict[k] + 1;
            }
            else
                dict.insert(make_pair(k, 1));
        }
    }
    return c;

}

int main(int argc, char const *argv[])
{
   cout<<sherlockAndAnagrams("abba");
    // vector<char> a {'b','b','a'};
    // vector<char> b {'a','b','b'};

    // map<vector<char>,int> map1;
    // sort(a.begin(), a.end()); 
    // map1.insert(make_pair(b,100));
    
    // cout << "Sorted \n"; 
    // for (auto x : a) 
    //     cout << x << " "; 

    // cout<<map1[b]<<endl;

    


    return 0;
}
