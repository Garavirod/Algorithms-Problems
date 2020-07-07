#include <bits/stdc++.h>
using namespace std;

void getcharSet(string sbtr, set<char> &s)
{
    cout<<"word > "<<sbtr<<endl;
    for (int i = 0; i < sbtr.size(); i++){
        s.insert(sbtr[i]);
        cout<<sbtr[i]<<" ";

    }
}
int sherlockAnagram(string word)
{
    map<set<char>, int> dict;
    int c = 0;
    for (int i = 0; i < word.length(); i++)
    {
        for (int j = 1; j <= word.length() - i; j++)
        {
            set<char> s;
            getcharSet(word.substr(i, j),s);
            cout<<s.size()<<endl;
            if (dict[s] != 0)
            {
                c++;
                dict[s] = dict[s] + 1;
            }
            else
            {                
                dict.insert(make_pair(s, 1));
            }
        }
    }
    return c;
}

int main(int argc, char const *argv[])
{
   cout<<sherlockAnagram("abba");
    return 0;
}
