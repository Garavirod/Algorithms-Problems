#include<bits/stdc++.h>

using namespace std;

/*
    inc -> the max sum includeing the previous element
    exc -> the max sum excluding the previous element

    arr = {2 4 5 7 12}

    ------------inc (max sum including the previous element)
    |      |
    |      |
 y  x   2  4  5  7  12
 |      |     |
 |      |     ---------- ¡we are here! 
 |      |
 ------------- exclude "max sum excluding the previous element (4)"

    if we were in position i=2 we have to add arr[i] plus exc, beacuse exc is the max sum
    excluding the previos element (4), we capture this result in a varibale k = exc + arr[i]

    we have to chose the max sum till this moment, exc (2 + exc) or inc (4 + exc)

    when we pass the next element i = 2, k turned out in the new inc, becase inc is the max sum
    including the previos element.


    inc = exc + arr[i]
    exc = max(inc, exc)

    -------------------------------------------------------------

    inc = arr[0] -> 2
    exc = 0

    i = 1
    max_sum_not_adj = exc + arr[i] -> 0 + 4
    exc_new = max(inc, exc) - > max(0,4)

    inc = max_sum_not_adj - > 4
    exc = new_exc -> 4


    i = 2 

    max_sum_not_adj = exc + arr[i] -> 4 + 9
    exc_new = max(inc, exc) - > max(4,4)

    inc = max_sum_not_adj - > 13
    exc = new_exc -> 4


*/

int maxSumNotAdj(vector<int> &v){
    int inc = v[0], exc = 0,max_sum_not_adj, new_exc;     
    for(int i=1; i<v.size(); i++){
        max_sum_not_adj = exc + v[i];
        new_exc = max(inc,exc);
        inc = max_sum_not_adj;
        exc = new_exc;
    }
    return max(exc,inc);
}

int main(int argc, char const *argv[])
{
    vector<int> v;
    int N;
    cin>>N;
    while(N--){
        int a;
        cin>>a;
        v.push_back(a);
    }

    cout<<maxSumNotAdj(v)<<endl;
    return 0;
}
