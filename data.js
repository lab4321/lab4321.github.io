const programsData = [
    {
        "id": 1,
        "title": "Demonstrate different number datatypes in Python",
        "aim": "To demonstrate different number datatypes in Python.",
        "algorithm": "Step 1: Start the program.\nStep 2: Declare an integer variable and print its value and type.\nStep 3: Declare a float variable and print its value and type.\nStep 4: Declare a complex variable and print its value and type.\nStep 5: Display the outputs and stop the program.",
        "code": "num1 = 25\nprint(\"num1 =\", num1)\nprint(\"Type of num1:\", type(num1))\n\nnum2 = 12.75\nprint(\"\\nnum2 =\", num2)\nprint(\"Type of num2:\", type(num2))\n\nnum3 = 5 + 2j\nprint(\"\\nnum3 =\", num3)\nprint(\"Type of num3:\", type(num3))",
        "output": "num1 = 25\nType of num1: <class 'int'>\n\nnum2 = 12.75\nType of num2: <class 'float'>\n\nnum3 = (5+2j)\nType of num3: <class 'complex'>",
        "doc_url": "docs/program 1.docx"
    },
    {
        "id": 2,
        "title": "Perform different arithmetic operations on numbers in python",
        "aim": "To perform different arithmetic operations on numbers in python",
        "algorithm": "Step 1: Start the program.\nStep 2: Prompt the user to enter the first number and store it in num1.\nStep 3: Prompt the user to enter the second number and store it in num2.\nStep 4: Perform addition and display the result.\nStep 5: Perform subtraction and display the result.\nStep 6: Perform multiplication, division, floor division, and modulus.\nStep 7: Display all results and then end the program.",
        "code": "num1 = float(input(\"Enter the first number: \"))\nnum2 = float(input(\"Enter the second number: \"))\n\nadd = num1 + num2\n\nsub = num1 - num2\n\nmul = num1 * num2\n\ndiv = num1 / num2\n\nfloordiv = num1 // num2\n\nmod = num1 % num2\n\nprint(\"\\n--- Arithmetic Operations ---\")\nprint(\"Addition:\", add)\nprint(\"Subtraction:\", sub)\nprint(\"Multiplication:\", mul)\nprint(\"Division:\", div)\nprint(\"Floor Division:\", floordiv)\nprint(\"Modulus:\", mod)",
        "output": "",
        "doc_url": "docs/program 2.docx"
    },
    {
        "id": 3,
        "title": "Illustrate a python program to find the largest of three numbers",
        "aim": "To Illustrate a python program to find the largest of three numbers",
        "algorithm": "Step 1: Start the program.\nStep 2: Input three numbers from the user — num1, num2, and num3.\nStep 3: Compare num1 with num2 and num3.\nStep 4: If num1 is greater than both, then num1 is the largest.\nStep 5: Else if num2 is greater than num3, then num2 is the largest.\nStep 6: Otherwise, num3 is the largest.\nStep 7: Display the largest number and end the program.",
        "code": "num1 = float(input(\"Enter the first number: \"))\nnum2 = float(input(\"Enter the second number: \"))\nnum3 = float(input(\"Enter the third number: \"))\n\nif num1 >= num2 and num1 >= num3:\n    largest = num1\n\nelif num2 >= num1 and num2 >= num3:\n    largest = num2\n\nelse:\n    largest = num3\n\nprint(\"\\nThe largest number is:\", largest)",
        "output": "",
        "doc_url": "docs/program 3.docx"
    },
    {
        "id": 4,
        "title": "Write a python program to print prime numbers less than 20",
        "aim": "To write a python program to print prime numbers less than 20",
        "algorithm": "Step 1: Start the program.\nStep 2: Read a number x from the user.\nStep 3: Set i = x.\nStep 4: Check if i < 20.\nStep 5: If true, print i.\nStep 6: Increase i by 1.\nStep 7: Repeat steps 4–6 until i reaches 20.\nStep 8: Stop the program.",
        "code": "x = int(input(\"num1: \"))\n\nfor i in range(x, 20):\n    is_prime = True\n    \n    for j in range(2, i):\n        if i % j == 0:\n            is_prime = False\n            break\n            \n    if is_prime and i > 1:\n        print(i)",
        "output": "",
        "doc_url": "docs/program 4.docx"
    },
    {
        "id": 5,
        "title": "Write a program to compute distance between two points taking input from the user (Pythagorean Theorem).",
        "aim": "To write a program to compute distance between two points taking input from the user (Pythagorean Theorem).",
        "algorithm": "Step 1: Start the program.\nStep 2: Read the coordinates of the first point– Input values for x1 and y1.\nStep 3: Read the coordinates of the second point– Input values for x2 and y2.\nStep 4: Calculate the horizontal difference– Compute (x2 – x1).\nStep 5: Calculate the vertical difference– Compute (y2 – y1).\nStep 6: Compute the distance using the distance formula.\nStep 7: Display the calculated distance between the two points.\nStep 8: Stop the program.",
        "code": "import math\n\ndef calculate_distance(x1, y1, x2, y2):\n    distance = math.sqrt((x2 - x1)**2 + (y2 - y1)**2)\n    return distance\n\nprint(\"Enter coordinates for the first point:\")\nx1 = float(input(\"Enter x1: \"))\ny1 = float(input(\"Enter y1: \"))\n\nprint(\"\\nEnter coordinates for the second point:\")\nx2 = float(input(\"Enter x2: \"))\ny2 = float(input(\"Enter y2: \"))\n\ndistance = calculate_distance(x1, y1, x2, y2)\nprint(f\"\\nThe distance between ({x1}, {y1}) and ({x2}, {y2}) is: {distance:.2f}\")",
        "output": "",
        "doc_url": "docs/program 5.docx"
    },
    {
        "id": 6,
        "title": "Find mean, median, mode for the given set of numbers in a list.",
        "aim": "To find mean, median, mode for the given set of numbers in a list.",
        "algorithm": "Step 1: Start the program.\nStep 2: Initialize a list of numbers: num = [10, 20, 20, 30, 40]\nStep 3: Calculate the Mean by dividing the sum of all elements by the total number of elements.\nStep 4: Sort the list in ascending order.\nStep 5: Find the Median. If the number of elements is even, calculate the average of the two middle elements. If the number of elements is odd, select the middle element.\nStep 6: Find the Mode by selecting the element that occurs most frequently in the list.\nStep 7: Display the list, Mean, Median, and Mode, then stop the program.",
        "code": "num = [10, 20, 20, 30, 40]\n\nmean = sum(num) / len(num)\n\nnum.sort()\nn = len(num)\n\nif n % 2 == 0:\n    median = (num[n//2 - 1] + num[n//2]) / 2\nelse:\n    median = num[n//2]\n\nmode = max(num, key=num.count)\n\nprint(\"Numbers:\", num)\nprint(\"Mean:\", mean)\nprint(\"Median:\", median)\nprint(\"Mode:\", mode)",
        "output": "",
        "doc_url": "docs/program 6 & 7.docx"
    },
    {
        "id": 7,
        "title": "Use recursion concept to find factorial of a number using recursion.",
        "aim": "To use recursion concept to find factorial of a number using recursion.",
        "algorithm": "Step 1: Start the program.\nStep 2: Define a recursive function factorial(n).\nStep 3: Check the base condition: If n is 0 or 1, return 1.\nStep 4: If the base condition is false, return n * factorial(n - 1)\nStep 5: Read an integer value from the user.\nStep 6: Call the factorial() function by passing the input number.\nStep 7: Display the factorial result and stop the program.",
        "code": "def factorial(n):\n    if n == 0 or n == 1:\n        return 1\n    else:\n        return n * factorial(n - 1)\n\nnum = int(input(\"Enter a number: \"))\n\nprint(\"Factorial of\", num, \"is\", factorial(num))",
        "output": "",
        "doc_url": "docs/program 6 & 7.docx"
    },
    {
        "id": 8,
        "title": "Write a python script to print the current date in format \"month date year\".",
        "aim": "To write a python script to print the current date in format \"month date year\".",
        "algorithm": "Step 1: Start the program.\nStep 2: Import the datetime module.\nStep 3: Get the current date using datetime.date.today().\nStep 4: Extract the month, date, and year from the current date.\nStep 5: Convert the month number into the month name.\nStep 6: Display the date in the format Month Date Year.\nStep 7: Stop the program.",
        "code": "import datetime\n\ntoday = datetime.date.today()\n\nmonth = today.strftime(\"%B\")\ndate = today.day\nyear = today.year\n\nprint(month, date, year)",
        "output": "",
        "doc_url": "docs/program 8,9,10.docx"
    },
    {
        "id": 9,
        "title": "Display the elements of the list in reverse order using data structures concept.",
        "aim": "To display the elements of the list in reverse order using data structures concept.",
        "algorithm": "Step 1: Start the program.\nStep 2: Import deque from collections.\nStep 3: Create an empty queue.\nStep 4: Get the number of elements from the user.\nStep 5: Read elements at run time and insert them into the queue.\nStep 6: Remove elements from the rear and display them.\nStep 7: Stop the program.",
        "code": "from collections import deque\n\nqueue = deque()\n\nn = int(input(\"Enter number of elements: \"))\n\nfor i in range(n):\n    element = int(input(\"Enter element: \"))\n    queue.append(element)\n\nprint(\"Elements in reverse order:\")\n\nwhile queue:\n    print(queue.pop())",
        "output": "",
        "doc_url": "docs/program 8,9,10.docx"
    },
    {
        "id": 10,
        "title": "Create a list and perform the following methods: insert() remove() append() len() pop() clear()",
        "aim": "To create a list in Python and perform various list operations.",
        "algorithm": "Step 1: Start the program.\nStep 2: Create a list with initial elements.\nStep 3: Insert a new element at a specified position using insert().\nStep 4: Remove a specific element using remove().\nStep 5: Add a new element at the end of the list using append().\nStep 6: Find the number of elements in the list using len().\nStep 7: Remove the last element using pop().\nStep 8: Remove all elements from the list using clear().\nStep 9: Display the list after each operation.\nStep 10: Stop the program.",
        "code": "my_list = [10, 20, 30]\nprint(\"Original list:\", my_list)\n\nmy_list.insert(1, 15)\nprint(\"After insert:\", my_list)\n\nmy_list.remove(20)\nprint(\"After remove:\", my_list)\n\nmy_list.append(40)\nprint(\"After append:\", my_list)\n\nprint(\"Length of the list:\", len(my_list))\n\nmy_list.pop()\nprint(\"After pop:\", my_list)\n\nmy_list.clear()\nprint(\"After clear:\", my_list)",
        "output": "",
        "doc_url": "docs/program 8,9,10.docx"
    }
];
