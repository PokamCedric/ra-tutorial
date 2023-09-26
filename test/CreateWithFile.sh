echo "This is a test..."
result=$(curl -d '@data.json' -H "Content-Type: application/json" -X POST http://localhost:8080/books)
echo "Response from server"
echo $result


## Pause it ##
function pause(){
 read -s -n 1 -p "Press any key to continue . . ."
 echo ""
}
pause