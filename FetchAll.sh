echo "This is a test..."
result=$(curl -X GET --header "Accept: */*" "http://localhost:8080/books")
echo "Response from server"
echo $result


## Pause it ##
function pause(){
 read -s -n 1 -p "Press any key to continue . . ."
 echo ""
}
pause