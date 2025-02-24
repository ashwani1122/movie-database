#include <stdio.h>
#include <conio.h>
    int main(){
        void add(int arr[], int);
        int arr[10] ,i,n;
        for(i=0;i<10;i++){
            scanf("%d" , &arr[i]);
        }
        add(arr, 10);
        }
    void add(int arr[], int n){
        int sum=0;
        for(int i=0;i<n;i++){
            sum+=arr[i];
        }
        printf("%d" , sum);
    }   