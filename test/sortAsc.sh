echo "This is a test..."
result=$(curl -X GET --header "Accept: */*" -g "http://localhost:8082/posts?sort=["title","ASC"]&range=[0, 4]")
echo "Response from server"
echo $result


## Pause it ##
function pause(){
 read -s -n 1 -p "Press any key to continue . . ."
 echo ""
}
pause