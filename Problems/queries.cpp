#include <bits/stdc++.h>

using namespace std;

string ltrim(const string &);
string rtrim(const string &);
vector<string> split(const string &);

int anyOcurr(int z, map<long,long> &ocrr){
    map<long,long>::iterator it;
    for(it = ocrr.begin(); it!=ocrr.end(); it++){
        if(z == it->second)
            return 1;
    }
    return 0;
}

/*
    OCURR

    3  - 2
    56 - 5
    12 - 0


    2 - 3
    5 - 56 

*/

// Complete the freqQuery function below.
vector<int> freqQuery(vector<vector<int>> queries) {
    vector<int> v;
    map<long,long> Map1, Map2;
    for (auto q: queries){
        if(q[0]==1){//CASE 1                        
            Map2[Map1[q[1]]]-=1;
            Map1[q[1]]+=1; 
            Map2[Map1[q[1]]]+=1;                          
            
        }else if (q[0]==2){//CASE 2
            int w = Map1[q[1]];
           if(w>0){ //Exist on M1
               Map2[w]-=1;
               Map1[q[1]]-=1;
               Map2[Map1[q[1]]]+=1;                                           
           }
        }else{
          
          if(Map2.find(q[1])!= Map2.end() && Map2[q[1]]!=0)
            v.push_back(1);
          else
            v.push_back(0);
        }            
            
    }
    return v;
}

int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    string q_temp;
    getline(cin, q_temp);

    int q = stoi(ltrim(rtrim(q_temp)));

    vector<vector<int>> queries(q);

    for (int i = 0; i < q; i++) {
        queries[i].resize(2);

        string queries_row_temp_temp;
        getline(cin, queries_row_temp_temp);

        vector<string> queries_row_temp = split(rtrim(queries_row_temp_temp));

        for (int j = 0; j < 2; j++) {
            int queries_row_item = stoi(queries_row_temp[j]);

            queries[i][j] = queries_row_item;
        }
    }

    vector<int> ans = freqQuery(queries);
    cout<<"-------"<<endl;

    for (int i = 0; i < ans.size(); i++) {
        cout << ans[i];

        if (i != ans.size() - 1) {
            cout << "\n";
        }
    }

    fout << "\n";

    fout.close();

    return 0;
}

string ltrim(const string &str) {
    string s(str);

    s.erase(
        s.begin(),
        find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
    );

    return s;
}

string rtrim(const string &str) {
    string s(str);

    s.erase(
        find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
        s.end()
    );

    return s;
}

vector<string> split(const string &str) {
    vector<string> tokens;

    string::size_type start = 0;
    string::size_type end = 0;

    while ((end = str.find(" ", start)) != string::npos) {
        tokens.push_back(str.substr(start, end - start));

        start = end + 1;
    }

    tokens.push_back(str.substr(start));

    return tokens;
}
