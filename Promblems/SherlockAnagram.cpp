#include <bits/stdc++.h>
using namespace std;

vector<char> getStringVec(string s){
    vector<char> v;
    for(int i=0;i<s.length(); i++)
        v.push_back(s[i]);    
    return v;    
}





bool CompareMaps(const map<char,int>& l, const map<char,int>& r)
{
  // same types, proceed to compare maps here

  if(l.size() != r.size())
    return false;  // differing sizes, they are not the same

  typename map<char,int>::const_iterator i, j;
  for(i = l.begin(), j = r.begin(); i != l.end(); ++i, ++j)
  {
    if(*i != *j)
      return false;
  }

  return true;
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
            if (dict.find(k)!=dict.end())
            {
                c++;
                //dict[k] = dict[k] + 1;
            }
            else
                dict.insert(make_pair(k, 1));
        }
    }
    return c;

}

int main(int argc, char const *argv[])
{
   cout<<sherlockAndAnagrams("kkkk");
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
