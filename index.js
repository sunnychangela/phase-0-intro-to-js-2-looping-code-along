function countDown(n)
{
  if (n >= 0)
  {
    console.log(n);
    n--;  //n is decremented and the new value is stored back to n
    countDown(n);  //Function is called again with the updated value
  }
  else
  {
    return;
  }
}

countDown(10);  //Function Call