import React, { useEffect, useMemo, useState } from "react";

const QUESTION_ROWS = [
  [2023,"A","1a","Syntax Analysis","Azhar Sir",10,"CO4","How can you determine a grammar is ambiguous or not? Determine for the following (10) [CO4]",""],
  [2023,"A","1b","Lexical Analysis","Azhar Sir",10,"CO4","Write a flex program to count the number of statements, lines, identifiers, loops in a (10) [CO4] A -> A(A) | E",""],
  [2023,"A","1c","Syntax Analysis","Azhar Sir",15,"CO4","Eliminate left factoring from the following grammar. source program. (15) (C04] A -> abB|aB|cdg| cdeB | cdfB",""],
  [2023,"A","2a","Lexical Analysis","Azhar Sir",10,"CO3","Design a transition diagram for identifying and handling nested comments in languages (10) [COI] ICO3!",""],
  [2023,"A","2b","Runtime Environments","Azhar Sir",20,"CO2","Explain memory deallocation technique by reference Counting Garbage Collector. (20) |C02]",""],
  [2023,"A","2c","Syntax Analysis","Azhar Sir",null,"","Construct a SLR Parse Table for the grammar: S-> SA|AB | epsilon Determine whether the table contains conflicts, and justify whether they can be climinated.",""],
  [2023,"A","3a","Intermediate Code Generation","Azhar Sir",12,"CO3","Implement three-address code such that instructions can be reordered without changing temporary values. if (x<=y) && !(x==y || x=1) then x=3 else y=5",""],
  [2023,"A","3b","Runtime Environments","Azhar Sir",15,"CO3","Draw activation tree for the following program. Assume program starts from the main function: void tower_of_hanoi(int n, char s, char t, char a) { if(n == 1) { printf(\"1 from %c to %c\", s, t); return; } tower_of_hanoi(n-1, s, a, t); printf(\"%d from %c to %c\", n, s, t); tower_of_hanoi(n-1, a, t, s); } int main(){ tower_of_hanoi(3, 'A', 'B', 'C'); }",""],
  [2023,"A","3c","Syntax Analysis","Azhar Sir",1,"","Show that no lefi recursive grammar can be LL (1) grammar.",""],
  [2023,"A","4a","Intermediate Code Generation","Azhar Sir",15,"CO","Why do we need backpatching in three-address code? Use the backpatching technique (15) [COS] to generate three-address code of the following program: for (i=0;i<5;1++) | while (true) | alil[j] = bli]tc[j]; if (a[illj] > 10){ break;",""],
  [2023,"A","4b","Syntax Analysis","Azhar Sir",20,"CO","How can you choose synchronizing tokens in Panic Mode Recovery for top-down (20) [COSI parsing? Explain with examples. For the given grammar, parse the input \"aababcac\" and show how Panic Mode Recovery can handle each error. S -> AB -> AB A -> a epsilon A -> aA A -> B -> bB|c B -> bB",""],
  [2023,"B","5a","Syntax Directed Definition","Shuvo Sir",12,"CO1","Consider an arithmetic expression (represented in postfix notation) contains the (12) [CO1] opcrators: -, *, + and / (the precedence of operator is decreasing respectively). Now construct a CFG with appropriate semantic rules.",""],
  [2023,"B","5b","Syntax Analysis","Azhar Sir",13,"CO1","Write down the pseudo-code for a predictive parser that validated the following (13) |CO1] grammar with an input string \"array [| dot dot 10] of Ta\" type -> simple IT id I array [simple] of type simple -> integer I char num dot dot num",""],
  [2023,"B","5c","Runtime Environments","Azhar Sir",10,"CO2","Define activation record. Draw an activation tree for the following program: (10) |C02] Fibonacci (int n) { if (n <= 1) (return n;) return Fibonacci (n-1)+Fibonacci (n-2); main () int x = Fibonacci (4);",""],
  [2023,"B","6a","Code Optimization","Shuvo Sir",10,"CO4","Construct Directed Acyclic Graph (DAG) for the following statement: at a* (b- c) + (b- c) * d+d * (et f). (10) |C04]",""],
  [2023,"B","6b","Type Checking","Shuvo Sir",null,"","Define type system and dynamic checking with proper example",""],
  [2023,"B","6c","Syntax Directed Definition","Shuvo Sir",10,"CO2","Consider a calculator which evaluates the following arithmetic expression: (10) |CO2] input: $1 * (3 + 4) + 3. Output: 10. Write down syntax directed definition for the calculator. ) Draw the annotated parse frce for the given input.",""],
  [2023,"B","7a","Type Checking","Shuvo Sir",12,"CO1","Define type expressions for the following code: f: integer -> boolean; (12) (CO1] i: integer; while f (i) do j: integer; k: integer k= i, 1 = j mod i; j = k;",""],
  [2023,"B","7b","Code Optimization","Shuvo Sir",5,"CO3","Apply optimization technique on the following three-address code: *m-l t3 < v goto (5) (15) |C03] 3*n j-1 10. a [ti] tn = 4*1 11. ts = a [ta] 1+1 12. if ts> v goto (9) 3* i 13. t6 = 4*j t3 = a [tz] 14. to = x",""],
  [2023,"B","7c","Code Generation","Shuvo Sir",8,"CO1","Analyze the role of target machine on the code generation phase of the compiler. (08) ICO1|",""],
  [2023,"B","8a","Code Generation","Shuvo Sir",10,"CO3","Suppose a particular machine requires even-odd register pairs for multiplication and (10) [CO3] instruction has the following format: division. The even register contains the operand (multiplicand / dividend). The source, destination sequences. Now consider the expression a = b + c*d/e and gencrate optimal machine-code",""],
  [2023,"B","8b","Syntax Analysis","Azhar Sir",null,"CO","Calculate the cost of the following instructions: MOV ADD ii) iii) MOV *Ri, *Rz A, Ro MOV *Rz, Ro Ror SUB",""],
  [2023,"B","8c","Code Generation","Shuvo Sir",null,"","Consider the following code segment: code for s action 1 action 3 code for P call p action 2 call p halt return The code of the above procedures starts at address: 150 and 250 respectively. The stack the stack allocation when the target machine in word addressable. starts at 600. Each instruction takes 5 words. Assume the size of cach procedure. Show 2031 FULL. MARKS: 210 ili) The rightmost column indicates course outcomes.",""],
  [2022,"A","1a","Syntax Analysis","Azhar Sir",7,"CO1","\"A context-free grammar (CFG) is capable of expressing any construct that can be described by a regular expression (RE).\" Why do we use both CFG and RE in compiler design? Explain briefly.",""],
  [2022,"A","1b","Syntax Analysis","Azhar Sir",20,"CO2","Consider the following grammar. S -> SaAb | BB, A -> aA | AB | c, B -> Scd | CD, C -> dc | c, D -> d. Eliminate left-recursion from the grammar, compute FIRST and FOLLOW sets for all non-terminals, build the predictive parsing table, and determine if the grammar is an LL(1) grammar.",""],
  [2022,"A","1c","Intermediate Code Generation","Azhar Sir",8,"CO3","Why is intermediate code generation considered an optional phase in compiler design? Explain the problems that might occur if the phase is removed from design.",""],
  [2022,"A","2a","Lexical Analysis","Azhar Sir",1,"","What is regular definition? Construct the regular definition for unsigned hexadecimo number (1) ICO!",""],
  [2022,"A","2b","Lexical Analysis","Azhar Sir",8,"CO2","Describe how phrase level recovery works in a syntax analyzer. Why is it not recommended (08) [CO2] and draw the transition diagram for it. (Use lowercase letters to represent the numbers) to alter the stack in phrase level recovery?",""],
  [2022,"A","2c","Intermediate Code Generation","Azhar Sir",null,"","Consider the following code snippet. = 1; i <= 100; i++) { for (j = i; j<=100; I t= i){ a [i] += 1; i) Generate the three-address code, i) Represent the three-address code by triples.",""],
  [2022,"A","3a","Lexical Analysis","Azhar Sir",7,"CO1","Describe how a compiler differentiate between identifiers and keywords during lexical (07) [CO1]",""],
  [2022,"A","3b","Syntax Analysis","Azhar Sir",0,"","Consider the following grammar. analysis. S-> aAd|bBd|aBc|bAc A -> C B -> C i) Construct the DFA of canonical LR (0) items, iii) Determine if the grammar is an SLR (1) grammar. il) Build the SIR (1) parse table,",""],
  [2022,"A","3c","Intermediate Code Generation","Azhar Sir",10,"CO3","Suppose, you are designing a compiler that will be used in devices with small memory. Which (10) [CO3] implementation method will you choose to represent the three-address code? Justify your *answer with proper explanation.",""],
  [2022,"A","4a","Runtime Environments","Azhar Sir",15,"CO3","Define activation and activation tree. Draw the activation tree for the following program. (15) [CO3] Assume that the program starts from the main function. merge (b, e) merge_sort (b, e) ( if (b>=e) return; merge_sort (0, 6); m = (bte) /2; merge sort (b, m); merge. sort (m + 1, e); merge (b, e)*; CamScanner",""],
  [2022,"A","4b","Intermediate Code Generation","Azhar Sir",12,"","What is backpaching technique? Convert the following code into three-address code (12) ICl applying backpatching technique. 1 = 10; sum = O; dol sum te i; 1 -= 1; /while (1>10):",""],
  [2022,"A","4c","Syntax Directed Definition","Shuvo Sir",null,"CO1","Why do we need to use token attributes to describe tokens? Explain briefly. 008) [CO1]",""],
  [2022,"B","5a","Introduction to Compiler","Azhar Sir",null,"","Define a one pass compiler with example.",""],
  [2022,"B","5b","Syntax Analysis","Azhar Sir",15,"CO2","Design a context free grammar for the following input string maintaining the precedence (15) [CO2) order as: \"-\">\"*\">\"+\">\"'\". 5+x-9*11/13",""],
  [2022,"B","5c","Syntax Analysis","Azhar Sir",10,"CO2","How is the concept of \"dangling else\" connected to the ambiguity problem, and what (10) [CO2] measures can be taken to resolve or prevent ambiguity by addressing the \"dangling clse\"",""],
  [2022,"B","6a","Syntax Directed Definition","Shuvo Sir",null,"","Differentiate between Syntax Directed Translation and Syntax Directed Definition.",""],
  [2022,"B","6b","Type Checking","Shuvo Sir",null,"","Define a type checker. Design type checker for the following segments. i) Function, (i) Statements, (iii) Expressions.",""],
  [2022,"B","6c","Type Checking","Shuvo Sir",null,"","Design a type expression for the following code written in C language. struct Student ( int Roll; char name [201; double CGPA; Total [120];",""],
  [2022,"B","7a","Code Generation","Shuvo Sir",15,"CO","Suppose a target machine is Byte addressable, two-address instruction of the form Now, calculate instruct cost of the following code segments. op source, destination (15) [CC4) (i) MOV b, Ro ADD c, Ro (ii) MOV c, SUB 4 (Ro), *R1 (iii) MOV Ro, R1 MOV Ro, a ADD Ro, *12 (R1) ADD #20, R1",""],
  [2022,"B","7b","Code Optimization","Shuvo Sir",10,"","Construct the abstract syntax tree and then DAG for the following statements. MOV *8 (RI), b (ii) a + a * (b - c) + (b - c)*d + a. ((x+y) - ((x+y+z)* (x-y)) + ((x+y) * (x-y+z))), (10) [CO!!",""],
  [2022,"B","7c","Code Optimization","Shuvo Sir",null,"","Differentiate between \"Unreachable code\" and \"Dead code\" with proper cxample.",""],
  [2022,"B","8a","Code Optimization","Shuvo Sir",10,"","Consider the following three address code. i=m - 1 j= n 12 = 4*i k = p*1 8. t: = a[tz] 13. if ts> goto (10) 19. x=a/12] p=p + 0 9. ifts < v goto (6) 15. to = 4 * p 20. 18 = 4 * i 5. = a[t] 6. i= i + 1 11.14 = 4 *j 16. p=p+ 1 21. t9 = 4 *j 12. Is = altil 17.t7 = allo 22.110 = 4*p 18. ifty < v goto (15) 23. a[tio] = 19 24. goto (14) i) Draw the Basic Block and Flow Graph. il) Apply the optimizations given below and finally show the optimized code. \"Common Sub-expression Elimination\" \"Dead Code Elimination\" \"Algebraic Simplification\"",""],
  [2022,"B","8b","Runtime Environments","Azhar Sir",15,"CO4","Consider a inachine word addressable, runtime memory location starts at 100, three code (15) [CO4] segment and their sizes are: A (20 bytes), B (50 bytes), C (80 bytes), their starting location- 2000, 500 and 800 respectively. The slack location starts at 1000 and each action size is S, words. Now, show the runtime memory allocations for the following code segment. /* code for A *//* code for B action 1 /* code for c * action 2 action 3 halt action 4 call B halt halt w = 4 byte-> CamScanner",""],
  [2021,"A","1a","Introduction to Compiler","Azhar Sir",null,"","Explain with a diagram how the statement a := b+c*10 is compiled",""],
  [2021,"A","1b","Lexical Analysis","Azhar Sir",null,"","Write a program in flex to detect the date-time format: \"2019-09-07T15:50+00Z\".",""],
  [2021,"A","1c","Syntax Analysis","Azhar Sir",6,"","What are the differences between token and lexeme? Divide the following program segment (06) into appropriate lexeme. int f1 (n) | float x; return (x<=-5.0||x>=5.0)?25:x*x; }",""],
  [2021,"A","1d","Runtime Environments","Azhar Sir",10,"","Define activation tree. How do you implement activation tree? Draw the activation tree for (10) the following pseudo code. main () | if f2 (u2) 1 f1 (el) ; f3 (el, ul); 4 (e2) ; else { f5 (C1) ; 16 (e2, u2);",""],
  [2021,"A","2a","Syntax Analysis","Azhar Sir",10,"","Define ambiguity of a grammar. Why do we eliminate ambiguity? Show that the following (10) grammar is ambiguous. How can we select the unique parse tree from the grammar? S->if E then S | if E then S else S | OS",""],
  [2021,"A","2b","Syntax Analysis","Azhar Sir",9,"","Define left recursion of a grammar How can you eliminate, left recursion? Eliminate left (09) recursion from the following grammar. S-> Aa | b A-> Ac | Sd | e",""],
  [2021,"A","2c","Syntax Analysis","Azhar Sir",1,"","What can be the contents of the stack for LL(1) parser? What are the actions taken by the (07) What is the significance of computing FIRST (a)? Compute the FIRST set from the following (09) parser if top of stack is a non-terminal X? grammar. E->TE' E'->+TE'|epsilon F->FT' T'->*FT'lE F-> (E) | id",""],
  [2021,"A","3a","Syntax Analysis","Azhar Sir",1,"","\"A grammar which is not left factored can not be LL(1) grammar\" - Justify the statement.",""],
  [2021,"A","3b","Syntax Analysis","Azhar Sir",null,"","Consider the following grammar T->int | real Parse the input string \"real id, id\" using shift reduce parser. Show the handles that (ii) Construct the canonical LR(O) items and hance construct the SLR parsing table you replace.",""],
  [2021,"A","3c","Syntax Analysis","Azhar Sir",9,"","What is panic mode error recovery? How can you design a synchronization token for error (09) (iii) Draw the PFA for GOTO function.",""],
  [2021,"A","4a","Intermediate Code Generation","Azhar Sir",8,"","Define intermediate code. How can you represent intermediate code? Represent the following (08) code by quadruples and triples. a = b*c+a*c",""],
  [2021,"A","4b","Intermediate Code Generation","Azhar Sir",10,"","A 3 dimensional array is declared using the following c statement (Assume base value = 400) (10) int A[10][15)120]; Develop the three address code to access an element e = Ali|j|(k];",""],
  [2021,"A","4c","Introduction to Compiler","Azhar Sir",null,"","Write a program in bison to check the type of any declared variable. INPUT: int a; show(a); OUTPUT: int",""],
  [2021,"A","4d","Introduction to Compiler","Azhar Sir",null,"","Draw the flow of the control statements: (i) If E the S1 else S2, and (ii) while E do S1",""],
  [2021,"B","5a","Code Optimization","Shuvo Sir",null,"","Consider the grammar: E->TE L->E ; E'->+TE E ->E T->FT' T'->*FTi T'->epsilon F->digit (i) Construct a syntax-directed definition (SDD) that performs arithmetic operations and shows output. (ii) Draw annotated parse tree and directed acyclic graph for input \"14+6*2;\"",""],
  [2021,"B","5b","Lexical Analysis","Azhar Sir",null,"","How can you search for the lexeme of an identifier from symbol table?",""],
  [2021,"B","5c","Syntax Directed Definition","Shuvo Sir",null,"","Test whether each of the following rules are L-attribute or S-attribute or none? S->AB (A.val = S.val and B.val = S.val} -R->PQ {R.val =P.val*Q.val and P.val = Q.val}",""],
  [2021,"B","6a","Syntax Directed Definition","Shuvo Sir",null,"","Write translation scheme to check the types of each statement of the following code: while (a<b) do if (c<d) else x = y-z then x = y+z",""],
  [2021,"B","6b","Code Optimization","Shuvo Sir",null,"","Construct the abstract syntax tree and then DAG for the statements: (i)((x+y)((x+y+z)(x-y)) +((x+y)*(x-y+z))), (ii) atat(atatat(atatata))",""],
  [2021,"B","6c","Type Checking","Shuvo Sir",10,"","How can you decide which function is to be overloaded using type checking? Show with (10) examples and semantic rules.",""],
  [2021,"B","7a","Code Generation","Shuvo Sir",7,"","Consider the following code segment. /* code * code at 1* code 9 * x = b-c 9 = q+4 return call p return y = atx halt call p The code of these procedures start at addresses 100, 200, 300 respectively. The size of activation record for s, p, q are 66, 44 & 100 bytes respectively. The activation record of s is stacked initially at 600. Show the stack allocation when target code is produced. Define Type system. When do you need dynamic checking? )Suppose a particular machine requires register-pairs for integer multiplication and division. (07) Generate the optimal machines code sequence for the expression: atbc/d",""],
  [2021,"B","7d","Code Optimization","Shuvo Sir",null,"","What is code motion? When do you need code motion?",""],
  [2021,"B","8a","Code Optimization","Shuvo Sir",8,"","Explain the following loop optimization techniques with example: (i) Common subexpression (08) elimination, and (ii) Loop Unwinding.",""],
  [2021,"B","8b","Code Generation","Shuvo Sir",9,"CO","What are the addressing modes supported by a target machine? Determine the cost the of the (09) following instruction sequences: RO, C LD RO, Y LD R1,i LD R1, z MUL Ri, R1,8 ADD RO, R1, RO a (R1), RO ST X, RO",""],
  [2021,"B","8c","Code Optimization","Shuvo Sir",20,"","Consider the following three-address code: I. n = 5 t7 = t6*2 17. K = K*1 if K>=n goto (20) 10. t8 = a[t7] 18. t10 = n*k t1 = n*i 11. t9 = t8*t7 19. K = K+1 t2 = tl+j 12. goto (13) 20. t11 = t10+j t3 = t2*2 13. I = j+1 21. t12 = t11*2 t4 = c|t3] 14. I = i+1 22. t13 = bit12] t5 = n*i 15. x = t9 23. y = t13 8. t6 = t5+j 16. If in goto (3) 24. If K<n goto (17) (i) Partition the code in basic blocks and show its control flow, and (ii) Optimize the code. Show the changes in code after you apply any optimization techniques.",""],
  [2020,"A","1a","Introduction to Compiler","Azhar Sir",12,"","\"Compiler is a translator program\" - Why? Translate the statement P=i+r*60% into different phases.",""],
  [2020,"A","1b","Lexical Analysis","Azhar Sir",8,"","Write a program in flex to detect a floating point number.",""],
  [2020,"A","1c","Syntax Analysis","Azhar Sir",10,"","Eliminate left recursion from the following grammar: S -> Aa | b, A -> Ac | Sd | epsilon.",""],
  [2020,"A","2a","Syntax Analysis","Azhar Sir",1,"","Explain the meaning of LL(K) parsing. Consider the following grammar: S -> aBu B->bB epsilon Show the parser table, stack, input, output using LL(1) for the input string abbu.",""],
  [2020,"A","2b","Syntax Analysis","Azhar Sir",null,"","What are the conflicts of shift reduce parsing?",""],
  [2020,"A","2c","Introduction to Compiler","Azhar Sir",null,"","Define Left-factoring with example.",""],
  [2020,"A","3a","Intermediate Code Generation","Azhar Sir",null,"","Consider the following code segment: i = p * n + k; while (i>0) do i = i - k; i) Generate the three address code. ii) Implement the three address code by quadruples and triples.",""],
  [2020,"A","3b","Syntax Analysis","Azhar Sir",null,"","Show the stack content for the following tree when i) Partition(1, n) is in execution. ii) QS(4, 4) is in execution. main ra() qsort 05664). QS(1, 4) Parition (1, n) QS(1,2) QS(4,4)","/compiler-diagrams/2020-stack-tree.png"],
  [2020,"B","4a","Introduction to Compiler","Azhar Sir",null,"","Differentiate between one pass and multi pass compiler.",""],
  [2020,"B","4b","Syntax Directed Definition","Shuvo Sir",null,"","Write a CFG with semantic rules to derive the following input string: \"Array [I... 25] of double\"",""],
  [2020,"B","4c","Syntax Analysis","Azhar Sir",8,"","Determine the ambiguity of the following grammar: string -> string + string | string - string | 0 | 1 | ... | 9. If you found it ambiguous, construct a new non-ambiguous grammar.",""],
  [2020,"B","5a","Runtime Environments","Azhar Sir",20,"","Consider a target machine is two byte addressable. Starting address of stack is 290. Starting address of activation record is 50. Each action costs 20 bytes. ssize, psize and qsize are 10, 20 and 30 bytes, respectively. Now determine the memory locations for the given code segment.",""],
  [2020,"B","5b","Type Checking","Shuvo Sir",10,"","Define Type Expressions for the following code: struct student { char Name[20]; int Roll; double CGPA; } STUD[120];",""],
  [2020,"B","6a","Code Optimization","Shuvo Sir",15,"","Consider the following three address code. Apply peephole optimizations showing flow (15) graphs for each optimization. 1. i = m-1 if ta<v goto (5) j = n j = j-1 = 3*n 10. tA = 4 *j v = a [t1] 11. = altal i = j+1 12. if ts>v goto (9) 6. t2 = 3*i 13. t6 = 4* i 7. t3 = a [tz] a [t6] = x",""],
  [2020,"B","6b","Code Optimization","Shuvo Sir",null,"","Draw a Directed Acyclic Graph (DAG) for the following expression: A* B+C - (1+ B)/(1+ B) - B",""],
  [2020,"B","6c","Type Checking","Shuvo Sir",null,"","Define static checking with examples.",""],
  [2019,"A","1a","Introduction to Compiler","Azhar Sir",null,"","\"Compiler acts as a translator\" - Justify the statement with appropriate example.",""],
  [2019,"A","1b","Lexical Analysis","Azhar Sir",10,"","Write a program in flex to detect a floating point number of the forms .65, 28.73 and 46.3E+8 (10)",""],
  [2019,"A","1c","Runtime Environments","Azhar Sir",15,"","Define activation tree and activation record with example. What is the role of control stack for (15) an activation tree? Show the contents of the activation record for the control stack q (2,3). .... 9 (1,9) P (1,9) .. 9(13) p (1,3) 9(1,0) 9(2,3)","/compiler-diagrams/2019-activation-tree.png"],
  [2019,"A","2a","Syntax Analysis","Azhar Sir",null,"","Divide the following program into appropriate lexeme. float Square (x) (return (x (x || x >= 10)? 100 : x*x;",""],
  [2019,"A","2b","Syntax Analysis","Azhar Sir",null,"","Define ambiguity of a grammar. Show that following grammar is ambiguous. S-> if E then S| ifE then S else S",""],
  [2019,"A","2c","Syntax Analysis","Azhar Sir",7,"","When is a grammar left recursive? Show that following grammar is left recursive. Eliminate (07) left recursion from the grammar. A-> A + B B B->C* DID",""],
  [2019,"A","2d","Type Checking","Shuvo Sir",null,"","Consider the following CFG for data type declaration of a programming language - TYPE -> SIMPLE | id | array [SIMPLE] of type TYPE SIMPLE -> integer | char | num dotdot num Where Nonterminal : TYPF, SIMPLE Terminal: id, array, of, type, integer, char, num, dotdot 1) Calculate the FIRST and FOLLOW set. ii) Construct the Predictive Parsing table. iii) Show the movement by the parser for the input \"array [num dotdot num] of integer\".",""],
  [2019,"A","3a","Syntax Analysis","Azhar Sir",10,"","How do you calculate the substring to be replaced at each reduction step for a Shift reduce (10)",""],
  [2019,"A","3b","Syntax Analysis","Azhar Sir",10,"","What is the general configuration for a LR Parsing algorithm? Explain the contents of the (10) parser? Explain. configuration for each actions of LR Parser.",""],
  [2019,"A","3c","Syntax Analysis","Azhar Sir",null,"","What are the conflicts during shift reduce parsing?",""],
  [2019,"A","3d","Syntax Analysis","Azhar Sir",null,"","Consider the following grammar E->E + T|T T->T *F|F F -> id Find the canonical LR(O) items for the grammar. Hence, draw the DFA of GOTO function.",""],
  [2019,"A","4a","Intermediate Code Generation","Azhar Sir",null,"","Define intermediate code. Represent the following statement into intermediate code:",""],
  [2019,"A","4b","Syntax Directed Definition","Shuvo Sir",null,"","Generate the semantic rule for a while statement of the form S -> while E do Si Hence, generate the three address code for the following code segment while (a < borc < d) do i = i + l;",""],
  [2019,"A","4c","Intermediate Code Generation","Azhar Sir",10,"","Let A be a 3 dimensional array of size 10x20x30 where Lowl = Low2 = Low3 = 0 and base (10) = 100. Develop the three address code for x = A [1] DJ [K].",""],
  [2019,"A","4d","Intermediate Code Generation","Azhar Sir",null,"","How can you reuse temporary names?",""],
  [2019,"B","5a","Introduction to Compiler","Azhar Sir",null,"","Differentiate between one pass and multi pass compiler.",""],
  [2019,"B","5b","Syntax Analysis","Azhar Sir",null,"","Differentiate a CFG with a Parse tree.",""],
  [2019,"B","5c","Syntax Directed Definition","Shuvo Sir",null,"","Consider the following grammar expr -> + expr term|- expr term | term term -> * term factor |/ term factor | factor factor -> digit | (expr) i) Write down the syntax directed definition for the grammar above. i) Draw the annotated parse tree for the input\"- (+4539\"",""],
  [2019,"B","5d","Syntax Analysis","Azhar Sir",null,"","Construct a CFG to explain the following terms. i) Ambiguity of grammar i) Associativity of operators.",""],
  [2019,"B","6a","Code Optimization","Shuvo Sir",null,"","Construct the Directed Acyclic Graph (DAG) for the following expression: at a * (b-c) + (b-c) *d+a",""],
  [2019,"B","6b","Type Checking","Shuvo Sir",null,"","What is type system? When do you need dynamic checking?",""],
  [2019,"B","6c","Type Checking","Shuvo Sir",null,"","Consider the following declaration: struct cell ( int info; ce11 k izruct cell *next:? i) Write the type expression for the types of K.",""],
  [2019,"B","6d","Code Optimization","Shuvo Sir",null,"","What is Coercions? Explain with examples. Represent the type expression with a DAG.",""],
  [2019,"B","7a","Code Generation","Shuvo Sir",8,"","Suppose a particular machine requires register pairs (an even and next odd numbered register) (08) for integer multiplication and division. The even register contains the value of the operand (operand denotes multiplicand or dividend). The instruction has the following format: Now consider the following three address code: OP Source, Destination t:=#/d",""],
  [2019,"B","7b","Code Generation","Shuvo Sir",null,"CO","Calculate the cost of the following instructions: Generate optimal machine-code sequences for the above three-address code. i) LD Ro, RI MOV Ro, M il) MOV A, B ADD 4(Ro), M ADD 4(Ro), *12(R,) ili) MOV #140, Ro SUB 14(Ro), *R2",""],
  [2019,"B","7c","Runtime Environments","Azhar Sir",null,"","Consider the following code segment: /* code for s */ action 1 (* code for p*/ action 3 /* code for q*/ call q retum action 4 action 2 call p halt action S The code for these procedures starts at addresses 150, 250, 350 respectively. The stack starts at 550 and each instruction takes 18 bytes. Show the stack allocation when the target code is produced.",""],
  [2019,"B","8a","Code Optimization","Shuvo Sir",3,"","Define basic block. Construct basic blocks from the following three-address code: 1 1 = 1 9) ifj <= 10 goto (3) 2) j= 1 10) i = i + 1 3) ti = 10 * j 11) if i <= 10 goto (2) 4) 12 = 1, + j 12) i = 1 5) 13 = 8 * t2 13) ts =j-1 6) 14 = 13 - 88 14) 16 = 88 * ts 7) a[t4] = 0.0 15) a[t6] = 1.0 8) j=j+ 1 16)i= i +1 17) if i <=10 goto (13) Now optimize the basic blocks by applying the following terms: (i) Common Sub-expression",""],
  [2019,"B","8b","Code Optimization","Shuvo Sir",null,"","Explain following transformation on basic block with proper example. elimination (ii) Copy Propagation (iii) Dead Code Elimination (iv) Reduction in Strength. Structure preserving transformation. Algebraic transformation.",""],
  [2019,"B","8c","Code Optimization","Shuvo Sir",null,"","What is Peephole optimization? Write down the characteristics of this optimization.",""],
  [2018,"A","1a","Syntax Analysis","Azhar Sir",null,"","What are the phases of compiler? Translate the following statement into different phases position = value + rate x 75%.",""],
  [2018,"A","1b","Lexical Analysis","Azhar Sir",null,"","Write a program in flex to detect to detect a floating point number of the form 426.52 and 08) 46.2E+5.",""],
  [2018,"A","1c","Runtime Environments","Azhar Sir",null,"","Define activation tree and activation record. Explain with example.",""],
  [2018,"A","1d","Runtime Environments","Azhar Sir",8,"","\"If a and b are procedure activations, then their lifetimes are either non-overlapping or (08) nested\"-justify the statement with example.",""],
  [2018,"A","2a","Syntax Analysis","Azhar Sir",null,"","What do you mean by ambiguity of grammar? Show that following grammar is ambiguous- S->if E then S| if E then S else S",""],
  [2018,"A","2b","Syntax Analysis","Azhar Sir",10,"","Why do you need a grammar to be left factored? Apply the idea of left factoring with the (10) following grammar A->abB | aB | cdg | cdeB | cdfB",""],
  [2018,"A","2c","Syntax Analysis","Azhar Sir",1,"","Consider the following grammar. S->iCtSE | a E->eS | 8 C->>b (i) Find the FIRST and FOLLOW set, (ii) Construct the LL(1) parse table, and (iii) Do you think the above grammar is a LL(1) grammar? Explain your answer.",""],
  [2018,"A","3a","Syntax Analysis","Azhar Sir",9,"","What is the general configuration of a LR parsing algorithm? Explain the actions of LR (09) parser.",""],
  [2018,"A","3b","Syntax Analysis","Azhar Sir",null,"","Consider the following grammar- E->E + T T->T * F F->id (i) Define closure and goto operation with example, (ii) Find the canonical LR(O) items of the grammar, and (iii) Construct the SLR parsing table of the grammar.",""],
  [2018,"A","3c","Syntax Analysis","Azhar Sir",null,"","What is the handle for shift reduce parser? Consider the grammar E->E+T T T->T *F|F *->(E) | id and the input is id + id * id. Find the handles for right sentential form.",""],
  [2018,"A","4a","Intermediate Code Generation","Azhar Sir",null,"","Define intermediate code. Represent the following statements into intermediate code. x[i] = y and x = y [i]",""],
  [2018,"A","4b","Syntax Directed Definition","Shuvo Sir",12,"","Generate the semantic rule for while statement of the form S->while E do Si and hence (12) generate the three address code for the following code segment. 1 = 2 * n + k; while i do I = 1 - k;",""],
  [2018,"A","4c","Intermediate Code Generation","Azhar Sir",10,"","Let A be a 3 dimensional array of size 10x20x30 where Lowl= Low2=Low3=0 and (10) base = 100. Develop the three address code for X = A[i]D][k].",""],
  [2018,"A","4d","Introduction to Compiler","Azhar Sir",null,"","What is the address code of a<b? S. a) Differentiate between one-pass and multi-pass compiler.",""],
  [2018,"B","1b","Syntax Analysis","Azhar Sir",9,"","Consider an arithmetic expression (represented in infix notation) of integers and identifiers (09) with the four binary operators +, -, *, /. Now construct an unambiguous grammar to evaluate the expression. Also verify your grammar with an input string that contains all the operators mentioned above.",""],
  [2018,"B","1c","Syntax Analysis","Azhar Sir",null,"","Define predictive parsing. Consider the following grammar: type->simple |T id | array[simple] of type simple->integer | char | num dotdot num Write down the pseudo code for the predictive parser that validates an input string which follows the syntax of the above grammar.",""],
  [2018,"B","1d","Syntax Analysis","Azhar Sir",null,"","Explain the following terms with proper example. (i) Associativity of operators and (ii) Precedence of operators",""],
  [2018,"B","6a","Type Checking","Shuvo Sir",null,"","Suppose we have the following declarations: typedef structi int a, b; char c; CELL foo[100]; ICELL, *PCELL; PCELL bar (x, y) int x; Write type expressions for the types of foo and bar.",""],
  [2018,"B","6b","Syntax Directed Definition","Shuvo Sir",null,"","Define syntax directed translation. Consider the grammar string->digit string operator | digit | string digit operator operator->*|/|+|- (l) Construct a syntax directed translation scheme that translate arithmetic expressions from postfix notation to infix notation and (ii) Draw the annotated parse tree for the input \"952\".\".",""],
  [2018,"B","6c","Code Generation","Shuvo Sir",8,"","\"Uniformity and completeness of the instruction sets of the target machine are important for (08) optimal code generation.\"-justify the statement with appropriate example.",""],
  [2018,"B","6d","Runtime Environments","Azhar Sir",null,"","Consider the following code segment: /*code for s*/ action 1 1* code for p*/ /* code for q*/ action 3 action 4 action 2 call q return call p halt action 5 return The code for these procedures start at addresses 100, 200 and 300 respectively. The size of main procedure starts at address 500. Each action instruction takes 10 bytes. Show the static activation record for s, p and q are 64, 84 and 100 bytes respectively. The activation record of allocation when the target code is produced.",""],
  [2018,"B","7a","Introduction to Compiler","Azhar Sir",10,"","\"The order in which computations are performed can negatively affect the efficiency of target (10) code\"-justify the statement.",""],
  [2018,"B","7b","Code Optimization","Shuvo Sir",null,"","Consider the following code segment: begin prod = 0 begin prod := prod + A[i] * B[i] + C[i] i: = i + 1 end while i<=50 end (i) Produce three address code, (ii) Find the basic blocks and draw the flow graph, and (iii) Construct the DAG for the basic blocks.",""],
  [2018,"B","8a","Type Checking","Shuvo Sir",null,"","Define type system. When do we need dynamic checking?",""],
  [2018,"B","8b","Code Optimization","Shuvo Sir",null,"","Given the following code segment x=a* at 2* a *b + b * b y = a * a - 2 * a*b+b*b z = x * x + y Draw the dependency graph before and after common sub expression elimination.",""],
  [2018,"B","8c","Code Generation","Shuvo Sir",13,"","What is the role of register descriptor and address descriptor in code generation algorithm? (13) Show the generated code along with the contents of register descriptor and address descripto or the following code segment for a simple machine model I = A -B U = A - C V = T + U W = V + U",""],
  [2018,"B","8d","Code Optimization","Shuvo Sir",null,"","Define code motion with example.",""],
  [2017,"A","1a","Syntax Analysis","Azhar Sir",null,"","What are the phases of a compiler? Translate the following statement into different phases. * position = position + initial + rate * 60;",""],
  [2017,"A","1b","Syntax Analysis","Azhar Sir",null,"","Divide the following program segment into appropriate lexemes float LimitedSquare(x){ float X; return (xx=-10.0 || x>=10.0)2100: x*x;",""],
  [2017,"A","1c","Runtime Environments","Azhar Sir",13,"","Define activation tree and control stack with examples. What are the contents of a general (13) activation record?",""],
  [2017,"A","2a","Lexical Analysis","Azhar Sir",null,"","Write a program in flex to detect an unsigned number.",""],
  [2017,"A","2b","Introduction to Compiler","Azhar Sir",null,"","What is dangling else problem? Explain with example.",""],
  [2017,"A","2c","Syntax Analysis","Azhar Sir",null,"","Define left recursion of a grammar. Eliminate left recursion from the following grammar S->Aa b",""],
  [2017,"A","2d","Syntax Analysis","Azhar Sir",1,"","What can be the contents of the stack for LL(1) parser? what are the actions taken by the (10) A->Ac | Sd | f parser if top of stack is a nonterminal X?",""],
  [2017,"A","3a","Syntax Analysis","Azhar Sir",1,"","What should the parser do ip an error case? Explain the panic mode error recovery in LL(1) (09) parsing.",""],
  [2017,"A","3b","Syntax Analysis","Azhar Sir",null,"","Explain the general configuration of LR parsing algorithm with its actions.",""],
  [2017,"A","3c","Syntax Analysis","Azhar Sir",0,"","What is canonical LR(0) items? Find the canonical LR(0) items from the following grammar E' ->E E>E+T E->T T->T*F T->F F7() F>id .",""],
  [2017,"A","4a","Intermediate Code Generation","Azhar Sir",10,"","Define intermediate code. What are the types of intermediate representation? Represent the (10) following statement into syntax tree and hence propose a data structure to implement it a=b*-c+ a * -c",""],
  [2017,"A","4b","Intermediate Code Generation","Azhar Sir",null,"","Consider the following code segment i=2 *n + k; while i do i = i - k; Generate the three address code. ii) Implement the code using quadruples.",""],
  [2017,"A","4c","Syntax Directed Definition","Shuvo Sir",10,"","How can you translate the switch-case statement? Write the translation scheme for the (10) following code segment switch(ch){ case 1: c = a + b; break; case 2: c = a - b; break;",""],
  [2017,"A","4d","Intermediate Code Generation","Azhar Sir",null,"","How can you reuse the temporary names?",""],
  [2017,"B","5a","Syntax Analysis","Azhar Sir",null,"","Define lookahead symbol. What are the properties of a parse tree?",""],
  [2017,"B","5b","Syntax Analysis","Azhar Sir",null,"","Explain the following terms with proper example: Associativity of operators, ii) Precedence of operators.",""],
  [2017,"B","5c","Syntax Analysis","Azhar Sir",null,"","Define predictive parsing. Consider the following grammar: expr->expr+term|expr-term|term term->term*factor | term/factor |factor Write down the pseudo-code for the predictive parser that validates an input string which factor->digit | (expr follows the syntax of the above grammar.",""],
  [2017,"B","5d","Code Optimization","Shuvo Sir",null,"","Construct Directed Acyclic Graph (DAG) for the following statement: ata* (b-c) + (b-c) *d+a(b-c)",""],
  [2017,"B","6a","Syntax Analysis","Azhar Sir",6,"","\"In a syntax tree, chains of single productions may be collapsed\"-Justify the statement with (06) proper example.",""],
  [2017,"B","6b","Syntax Directed Definition","Shuvo Sir",10,"","Consider an arithmetic expression (represented in infix notation) consists of operators '+ and (10) **'. The operands are number and identifier. i) Write down the syntax-directed definition for constructing a syntax tree for the above expression. ii) Construct a syntax tree for the input a-4tc.",""],
  [2017,"B","6c","Type Checking","Shuvo Sir",null,"","Define type system. When do you need dynamic checking?",""],
  [2017,"B","6d","Type Checking","Shuvo Sir",10,"","Suppose a language consists of declarations followed by statements. the statements are (10) assignment, conditional and while statements. Type of declarations are int and char. Write down the translation scheme for checking the type of statements and declaration of identifiers.",""],
  [2017,"B","7a","Code Optimization","Shuvo Sir",null,"","Define flow graph with suitable example.",""],
  [2017,"B","7b","Code Generation","Shuvo Sir",8,"","Suppose a particular machine requires register-pairs (an even and next odd numbered register) (08) for integer multiplication and division. The even register contains the value of the operand (operand denotes multiplicand/dividend). The instruction has the following format: Now consider the following three-address code: OP Source, Destination t:=1*c ti-t/d",""],
  [2017,"B","7c","Code Generation","Shuvo Sir",null,"CO","Calculate the cost of the following instructions: Generate optimal machine-code sequences for the above three-address code. MOV B, RO ADD C, RO ii) MOV B, A MOV RO, A ADD C, A ii) MOV *R1, *RO ADD *R2, *RO",""],
  [2017,"B","7d","Runtime Environments","Azhar Sir",null,"","Consider the following code segment: /* code for s*/ actionl /* code for p */ call q action3 /* code for q */ action action2 return call p halt actions return The code for these procedures starts at addresses 100, 200 and 300 respectively. The stack starts at 600 and each action instruction takes 15 bytes. Show the stack allocation when the target code is produced.",""],
  [2017,"B","8a","Code Optimization","Shuvo Sir",null,"","Explain code motion with example.",""],
  [2017,"B","8b","Code Optimization","Shuvo Sir",null,"","Explain following peephole optimization with proper example: i) Redundant-instruction elimination.",""],
  [2017,"B","8c","Code Optimization","Shuvo Sir",null,"","Given the following code segment: Flow-of-control optimization. A=x*x+2*x*y+y*y B=x*x-2*x*y+y*y Draw the dependency graph before and after common sub-expression elimination.",""],
  [2017,"B","8d","Code Optimization","Shuvo Sir",4,"","What is a basic block? Optimize the basic block given below: i=m-1 t)=4*n j=n i=i+| 12=4*i t=4*1 r=a[ti] t8=4*) 413-4n [12=4\"i if tacy goto B2 B3 19-45% a[t1z] = t11 tis=4 *n 4=4*j roto B altis]= x 15=a(4) if ts> v goto B, if i>=j goto B6 (ii) Copy propagation, (iii) Dead code elimination, and (iv) Reduction in strength. Your optimization must be included followings: (i) Common Sub-expression elimination, phases? Show the contents of different phases for the following statement: value = Base + rate * 60;","/compiler-diagrams/2017-basic-block-flow.png"],
  [2016,"A","1b","Syntax Analysis","Azhar Sir",null,"","Define ambiguous grammar. Show that following grammar is ambiguous. S -> S(S)S| epsilon",""],
  [2016,"A","1c","Lexical Analysis","Azhar Sir",10,"","What is token and lexeme? Write a program in flex to count the number of statements, lines (10) and identifiers in a source program.",""],
  [2016,"A","1d","Lexical Analysis","Azhar Sir",null,"","Draw a transition diagram for an unsigned number.",""],
  [2016,"A","2a","Introduction to Compiler","Azhar Sir",null,"","Define 'dangling-else' problem with example.",""],
  [2016,"A","2b","Syntax Analysis","Azhar Sir",7,"","Define left factoring. Why do you need to eliminate left factoring? Eliminate left factoring (07) from the following grammar: 1-> abB aB cdg cdeB cdjB",""],
  [2016,"A","2c","Syntax Analysis","Azhar Sir",15,"","Consider the following grammar of an arbitrary programming language. (capital letters are (15) non terminals and small letters are terminals) A - pByArA| sBIA irE\" C -> ANCE --> : i) Calculate FIRST and FOLLOW set. ii) Develop LL(1) parse table. ili) Show the Stack movement for the input string \"smtuuvwv\".",""],
  [2016,"A","2d","Syntax Analysis","Azhar Sir",1,"","\"A left recursive grammar cannot be LL(1) grammar\"-justify the statement.",""],
  [2016,"A","3a","Syntax Analysis","Azhar Sir",1,"","What can be the contents of the stack for LL(1) parser? What are the actions taken by the (10) parser if the top of stack is a non terminal X?",""],
  [2016,"A","3b","Syntax Analysis","Azhar Sir",null,"","Define augmented grammar and closure of items with example.",""],
  [2016,"A","3c","Syntax Analysis","Azhar Sir",8,"","What are the contents of goto and action table for a shift reduce parser? How can you (08)",""],
  [2016,"A","3d","Runtime Environments","Azhar Sir",10,"","Define activation tree and activation record. Draw the activation tree for the following (10) calculate them? program segment. factorial (int n) l if (n == 1) return 1; else return in*factorial (n-1)); main () 1 int x = factorial (4);",""],
  [2016,"A","4a","Syntax Directed Definition","Shuvo Sir",10,"","Define intermediate code. Define the semantic rule for type conversion for the following (10) production rule: E -> E1 + E2",""],
  [2016,"A","4b","Intermediate Code Generation","Azhar Sir",10,"","Let 1 be a 3 dimensional array of size 10x 20x30 where Low| = Low2 = Low3 = 0 and (10) base =100. Develop the three address code for x = Ai][/][k].",""],
  [2016,"A","4c","Syntax Directed Definition","Shuvo Sir",null,"","Consider the following code segment: A = B*C+D; sum = 0; while A do begin A = A-D; Sum = sum+A; end; i) Gencrate the three address code. ii) Implement the code using quadruples and triples. ili) Develop the semantic rule for while statement.",""],
  [2016,"B","5a","Syntax Analysis","Azhar Sir",null,"","Define lookahead symbol. What are the components of a context free grammar (CFG)?",""],
  [2016,"B","5b","Syntax Analysis","Azhar Sir",8,"","Consider an arithmetic expression (represented in Infix nolation) contains the operators: +, -, (08) *, and /. Now construct an unambiguous grammar to evaluate the expression.",""],
  [2016,"B","5c","Syntax Analysis","Azhar Sir",null,"","Define predictive parsing. Consider the following grammar: type -> simple I Tid |array (simple] of type simple -> integer char num dotdot num follows the syntax of the above grammar. Write down the pseudo-code for the predictive parser that validates an input string which",""],
  [2016,"B","5d","Code Optimization","Shuvo Sir",null,"","Construct Directed Acyclic Graph (DAG) for the following statement: a+a*(b-c) + (b-c)*d+d* (e+ /)",""],
  [2016,"B","6a","Type Checking","Shuvo Sir",null,"","What is type system? When do we need dynamic checking? Explain with example.",""],
  [2016,"B","6b","Syntax Directed Definition","Shuvo Sir",10,"","Suppose a desk calculator reads an input line containing an arithmetic expression involving (10) digits, parentheses, the operators '+' and '*' followed by a dollar (S) sign and prints the value of the expression. i) Write down the syntax directed definition for the calculator. ii) Draw the annotated parse tree for the input 3*5 + 4 * 95. /",""],
  [2016,"B","6c","Type Checking","Shuvo Sir",null,"","Write type expressions for array of pointers to integers ranging from 1 to 100.",""],
  [2016,"B","6d","Type Checking","Shuvo Sir",10,"","Suppose a language consists of a sequence of declarations followed by a single expression. (10) type of declarations. Types of declaration are integer and char. Write down the translation scheme for checking the",""],
  [2016,"B","7a","Code Generation","Shuvo Sir",8,"","\"The nature of the instruction set of the target machine may determine the efficiently of the (08) target code\" - justify the statement.",""],
  [2016,"B","7b","Code Generation","Shuvo Sir",8,"","Suppose a particular machine requires register-pairs (an even and next odd numbered register) (08) for integer multiplication and division. The even register contains the value of the operand (operand denotes multiplicand/dividend). The instruction has the following format: Now consider an arithmetic expression: OP Source, Destination. a=b+c*d-elf Generate the optimal machine-code sequences for the above expression.",""],
  [2016,"B","7c","Code Optimization","Shuvo Sir",null,"","What is a basic block? How are the basic blocks determined within a program?",""],
  [2016,"B","7d","Code Generation","Shuvo Sir",12,"","What is the role of register descriptor and address descriptor in code generation algorithm? (12) Show the generated code along with the contents of register descriptor and address descriptor for the following code segment for a simple machine model. U= A-C V=T + U W =V +U",""],
  [2016,"B","6a","Code Optimization","Shuvo Sir",null,"","Explain the following code-improving transfornation: (i) Constant folding, (ii) Algebraic simplification.",""],
  [2016,"B","6b","Introduction to Compiler","Azhar Sir",null,"","Explain 'Structure Prescrving Transformation' with proper example.",""],
  [2016,"B","6c","Runtime Environments","Azhar Sir",null,"","Consider the following code segment: /*code for s*/ action 1 /code for p*/ call q action 3 1* code for q*/ action 2 call q action 1 halt return return The code for these procedures starts at address 100, 200, and 300 respectively. The stack starts at 600 and cach action instruction takes 10 byles. Show the stack allocation when the larget code is produced.",""],
  [2016,"B","6d","Code Optimization","Shuvo Sir",null,"","Apply the following techniques on the graph given below to improve the code: i) induction variables elimination ii) reduction in strength. i := m-1 j := n ty:= 4*n := a [ti) i +1 tz: = 4*i ty:= altal if ty<N goto Bz to: = 4*j j := j-1 ts:= a[ty) if ts>N goto B3 if i>j goto B6 . BA Page. 3 05 3 1, a) Differentiate between token, pattern and lexeme with example.","/compiler-diagrams/2016-optimization-flow.png"],
  [2015,"A","1b","Introduction to Compiler","Azhar Sir",12,"","What are the phases of a compiler? Explain the syntax and semantic analysis of the statement (12) 2=4*a + b*i.",""],
  [2015,"A","1c","Syntax Analysis","Azhar Sir",13,"","Write a program in flex to recognize identifiers (start with letters followed by letters and (13) digits), assigument operator (:=), arithmetic operators (+, -, * /), relational operators <, , =<, >=), key words (if, else, while, for) and comments ( l/ and /*...\"/).",""],
  [2015,"A","2a","Runtime Environments","Azhar Sir",null,"","Consider the following code segment void rOl int i;..) int p(int m, int n)(...) void g(int m, int n) (int I; i (m> n){ i=p(m, n); q(m, i-1); g(i+1, n);) / maind{ TO: a[0]=-999; a[10]=999; q(1,9);) i) Define activation tree, activation record, and control stack ii) Draw the activation tree for the above code segment iii) Show the control stack at q(2,3).",""],
  [2015,"A","2b","Introduction to Compiler","Azhar Sir",null,"","What is dangling else problem? Explain with example.",""],
  [2015,"A","2c","Syntax Analysis","Azhar Sir",8,"","What is the idea of left factoring of a grammar? Apply left factoring in the following (08) grammar A->ad/a/ab/abc/b",""],
  [2015,"A","2d","Introduction to Compiler","Azhar Sir",null,"","What are the problems of top down parsing?",""],
  [2015,"A","3a","Syntax Analysis","Azhar Sir",1,"","What can be the contents of the stack for LL(1) parser? What are the actions taken by the (09) parser if the top of stack is a non terminal X?",""],
  [2015,"A","3b","Syntax Analysis","Azhar Sir",9,"","Consider the general configuration of a LR parser (SoX,S,.. XmSm, ai ait|...a, S). Explain the (09) actions by the parser based on < Sm, a>.",""],
  [2015,"A","3c","Syntax Analysis","Azhar Sir",0,"","Find the canonical collection of sets of LR(0) items for the following grammar. E->E E->E+T/T T->T*F/F F-> (E) / id",""],
  [2015,"A","3d","Syntax Analysis","Azhar Sir",null,"","What will you do if the resulting table for LL parser contains multiply defined entries?",""],
  [2015,"A","4a","Intermediate Code Generation","Azhar Sir",null,"","Define intermediate code. How can you represent intermediate code?",""],
  [2015,"A","4b","Syntax Directed Definition","Shuvo Sir",null,"","Consider the following code segment i = 2*n + k; while (i) do i = i-k; Generate the three address code ii) Implement the three address code using quadruples and triples ili) Write a semantic rule for while statement",""],
  [2015,"A","4c","Syntax Directed Definition","Shuvo Sir",11,"","How can you translate the switch-case statement into three address code? Write the (11) translation scheme for the following switch-case statement switch(a+b-c) | case 1: 2 = xty; break; case 2: z = x-y; break; }",""],
  [2015,"B","5a","Syntax Analysis","Azhar Sir",null,"","Define look ahead symbol. What are the properties of a parse tree?",""],
  [2015,"B","5b","Syntax Directed Definition","Shuvo Sir",10,"","Suppose a desk calculator reads an input line containing an arithmetic expression involving (10) digits, parentheses, the operators '+' and '* followed by a new line character 'In' and prints the value of the expression. Write down the syntax directed definition for the calculator i) Draw the annotated parse tree for the input 3*5 + 4*n",""],
  [2015,"B","5c","Type Checking","Shuvo Sir",null,"","Suppose a declaration consist of the key word int or real followed by a list of identifiers construct the grammar for the above declaration ii) Draw the dependency graph for the input int a, b, c.",""],
  [2015,"B","5d","Syntax Analysis","Azhar Sir",8,"","\"A syntax tree is acondensed form of a parse tree\"- justify the statement with proper example. (08)",""],
  [2015,"B","6a","Type Checking","Shuvo Sir",null,"","What does the static check mean? Describe some static checks with examples.",""],
  [2015,"B","6b","Type Checking","Shuvo Sir",8,"","What is type expression? How is the type constructor applied to type expressions to get type (08) expression for arrays, records and functions?",""],
  [2015,"B","6c","Code Optimization","Shuvo Sir",null,"","Construct the Directed Acyclic Graph for the statement nta\"(b-c)+(b-c)*d+a* (b-c)",""],
  [2015,"B","6d","Syntax Directed Definition","Shuvo Sir",12,"","Suppose a robot can be instructed to move one step enst, north, west or south from its initial (12) position as shown bellow. 4 North West -> East South il) construct a grammar for movement of the robot To verify your grammar show an input string that can be obtained from the iii) Draw annotated parse tree for an input. All the sample input must begin with an initial position start at (-5, 3) which is followed by at least four different","/compiler-diagrams/2015-robot-directions.png"],
  [2015,"B","7a","Code Optimization","Shuvo Sir",8,"","Briefly describe following peephole optimizations with proper example: i) Redundant (08) instruction elimination ii) Algebraic simplifications. -> char/integer/array[num|ofT E-> literal / num / id / E mod E / EE Design a type checker for the above language",""],
  [2015,"B","7c","Code Generation","Shuvo Sir",7,"","\"Statement by statement code generation often produces poor code\" - justify the statement (07) with proper example.",""],
  [2015,"B","7d","Runtime Environments","Azhar Sir",null,"","Consider the following code segment /* code for C*/ /*Code for P*/ action / call P action 3 action 2 relurn hall The code for the procedures starts at addresses 200 and 400 respectively and each action instruction takes 40 bytes. The activation records for the procedures are statically allocated starting at location 600 and 664 respectively. Show the static allocation for the code segment.",""],
  [2015,"B","8a","Code Optimization","Shuvo Sir",8,"","\"Applying one optimization may raise opportunities for other optimizations\"- justify the (08) statement with proper example.",""],
  [2015,"B","8b","Code Optimization","Shuvo Sir",null,"","Eliminate common sub expression from the following code segment",""],
  [2015,"B","8c","Syntax Analysis","Azhar Sir",null,"CO","Calculate the cost of the following instructions left = v/i*n + j-I]; right = v[i*n+j+ 1]; sum = up + down + left + right, MOV B, RO ii) MOV B, A iii) MOV *RI, *RO ADD C, RO MOV RO, A ADD C, A ADD *R2, *RO",""],
  [2015,"B","8d","Code Optimization","Shuvo Sir",10,"","Apply the techniques induction variables elimination and reduction in strength on the (10) following flow graph. i := m-l j:=n 41:= 4*n = i+l 12:= 4 * i if tasy go to B2 j:=j-l 14: = 4*j 1s: = alla) if ts>y go to B3","/compiler-diagrams/2015-flow-graph.png"]
];

const SLIDE_SECTIONS = [
  {
    teacher: "Azhar Sir",
    accent: "#0f766e",
    topics: [
      ["Introduction to Compiler", "Introduction to Compiler"],
      ["Lexical analysis", "Lexical Analysis"],
      ["Syntax Analysis 1", "Syntax Analysis"],
      ["Syntax Analysis 2", "Syntax Analysis"],
      ["Syntax Analysis 3", "Syntax Analysis"],
      ["Intermediate code generation", "Intermediate Code Generation"],
      ["Runtime Environments", "Runtime Environments"],
    ],
  },
  {
    teacher: "Shuvo Sir",
    accent: "#b45309",
    topics: [
      ["Syllabus", "Introduction to Compiler"],
      ["Introduction", "Introduction to Compiler"],
      ["Parse Tree, AST", "Syntax Analysis"],
      ["Predective Parsing", "Syntax Analysis"],
      ["One Pass Compiler *", "Introduction to Compiler"],
      ["One Pass Compiler 1", "Introduction to Compiler"],
      ["One Pass Compiler 2", "Introduction to Compiler"],
      ["Syntax Directed Definition", "Syntax Directed Definition"],
      ["4. Type-checking", "Type Checking"],
      ["Next Use Information", "Code Generation"],
      ["5.3. Basic blocks and flow graphs", "Code Optimization"],
      ["Code Generation", "Code Generation"],
      ["Code Optimization", "Code Optimization"],
    ],
  },
];

const RAW_QUESTIONS = QUESTION_ROWS.map(
  ([year, section, code, topic, teacher, marks, co, text, diagram]) => ({
    year,
    section,
    code,
    topic,
    teacher,
    marks,
    co,
    text,
    diagram,
    sourceId: `${year}-${section}-${code}`,
  }),
);

const SORT_OPTIONS = [
  ["frequency", "Most repeated"],
  ["latest", "Latest year"],
  ["oldest", "Oldest year"],
  ["marks", "Highest marks"],
  ["topic", "Topic name"],
];

const MARK_BUCKETS = [
  ["short", "Short", (marks) => marks && marks <= 8],
  ["medium", "Medium", (marks) => marks && marks > 8 && marks <= 12],
  ["long", "Long", (marks) => marks && marks > 12],
  ["unknown", "Unmarked", (marks) => !marks],
];

function normalizePattern(text) {
  return text
    .toLowerCase()
    .replace(/\bco\s*\d\b/g, " ")
    .replace(/\(\s*\d{1,2}\s*\)/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\b(the|a|an|with|for|of|and|or|to|in|from|following)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function uniqueSorted(values, direction = "asc") {
  const sorted = Array.from(new Set(values)).sort((a, b) => (a > b ? 1 : -1));
  return direction === "desc" ? sorted.reverse() : sorted;
}

function useStoredObject(key, fallback) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? JSON.parse(stored) : fallback;
    } catch {
      return fallback;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Local storage can be disabled in private browsing; the UI still works for the session.
    }
  }, [key, value]);

  return [value, setValue];
}

function toggleSetItem(setter, value) {
  setter((previous) => {
    const next = new Set(previous);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    return next;
  });
}

function Chip({ active, children, onClick, tone = "teal" }) {
  const activeClass = tone === "amber" ? "border-amber-700 bg-amber-50 text-amber-800" : "border-teal-700 bg-teal-50 text-teal-800";
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-md border px-3 py-1.5 text-sm font-medium transition ${
        active ? activeClass : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-950"
      }`}
    >
      {children}
    </button>
  );
}

function SectionLabel({ children }) {
  return <p className="mb-2 mt-5 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">{children}</p>;
}

export default function AIQuestionPatternDashboard() {
  const [search, setSearch] = useState("");
  const [sortMode, setSortMode] = useState("frequency");
  const [yearFilter, setYearFilter] = useState(new Set());
  const [teacherFilter, setTeacherFilter] = useState(new Set());
  const [topicFilter, setTopicFilter] = useState(new Set());
  const [sectionFilter, setSectionFilter] = useState(new Set());
  const [statusFilter, setStatusFilter] = useState(new Set());
  const [markFilter, setMarkFilter] = useState(new Set());
  const [questionMemory, setQuestionMemory] = useStoredObject("compiler-question-memory-v1", {});
  const [topicMemory, setTopicMemory] = useStoredObject("compiler-topic-memory-v1", {});
  const [activeView, setActiveView] = useState("questions");

  const questions = useMemo(() => {
    const byPattern = new Map();

    RAW_QUESTIONS.forEach((question) => {
      const key = normalizePattern(question.text) || question.sourceId;
      if (!byPattern.has(key)) {
        byPattern.set(key, {
          key,
          text: question.text,
          topic: question.topic,
          teacher: question.teacher,
          marks: question.marks,
          co: question.co,
          diagrams: question.diagram ? [question.diagram] : [],
          occurrences: [],
        });
      }

      const current = byPattern.get(key);
      current.occurrences.push(question);
      current.marks = Math.max(current.marks || 0, question.marks || 0) || current.marks;
      if (question.diagram && !current.diagrams.includes(question.diagram)) current.diagrams.push(question.diagram);
      if (!current.co && question.co) current.co = question.co;
    });

    return Array.from(byPattern.values()).map((question) => {
      const years = uniqueSorted(question.occurrences.map((item) => item.year), "desc");
      const sections = uniqueSorted(question.occurrences.map((item) => item.section));
      const teachers = uniqueSorted(question.occurrences.map((item) => item.teacher));
      const topics = uniqueSorted(question.occurrences.map((item) => item.topic));
      return {
        ...question,
        years,
        sections,
        teachers,
        topics,
        latestYear: Math.max(...years),
        firstYear: Math.min(...years),
        frequency: question.occurrences.length,
      };
    });
  }, []);

  const years = useMemo(() => uniqueSorted(RAW_QUESTIONS.map((question) => question.year), "desc"), []);
  const topics = useMemo(() => uniqueSorted(RAW_QUESTIONS.map((question) => question.topic)), []);
  const teachers = ["Azhar Sir", "Shuvo Sir"];
  const sectionOptions = ["A", "B"];

  const getStatus = (key) => questionMemory[key] || "new";
  const isTopicMarked = (teacher, topic) => Boolean(topicMemory[`${teacher}:${topic}`]);

  const setQuestionStatus = (key, status) => {
    setQuestionMemory((previous) => {
      const next = { ...previous };
      if (next[key] === status) delete next[key];
      else next[key] = status;
      return next;
    });
  };

  const toggleTopicMemory = (teacher, topic) => {
    setTopicMemory((previous) => {
      const next = { ...previous };
      const key = `${teacher}:${topic}`;
      if (next[key]) delete next[key];
      else next[key] = true;
      return next;
    });
  };

  const filteredQuestions = useMemo(() => {
    const query = search.trim().toLowerCase();
    const selectedYears = yearFilter.size ? Array.from(yearFilter) : null;
    const selectedTeachers = teacherFilter.size ? Array.from(teacherFilter) : null;
    const selectedTopics = topicFilter.size ? Array.from(topicFilter) : null;
    const selectedSections = sectionFilter.size ? Array.from(sectionFilter) : null;
    const selectedStatuses = statusFilter.size ? Array.from(statusFilter) : null;
    const selectedMarkBuckets = markFilter.size ? Array.from(markFilter) : null;

    const result = questions.filter((question) => {
      if (query) {
        const haystack = `${question.text} ${question.topic} ${question.teacher} ${question.years.join(" ")}`.toLowerCase();
        if (!haystack.includes(query)) return false;
      }
      if (selectedYears && !question.years.some((year) => selectedYears.includes(year))) return false;
      if (selectedTeachers && !question.teachers.some((teacher) => selectedTeachers.includes(teacher))) return false;
      if (selectedTopics && !question.topics.some((topic) => selectedTopics.includes(topic))) return false;
      if (selectedSections && !question.sections.some((section) => selectedSections.includes(section))) return false;
      if (selectedStatuses && !selectedStatuses.includes(getStatus(question.key))) return false;
      if (selectedMarkBuckets) {
        const matched = MARK_BUCKETS.some(([id, , check]) => selectedMarkBuckets.includes(id) && check(question.marks));
        if (!matched) return false;
      }
      return true;
    });

    return result.sort((a, b) => {
      if (sortMode === "latest") return b.latestYear - a.latestYear || b.frequency - a.frequency;
      if (sortMode === "oldest") return a.firstYear - b.firstYear || b.frequency - a.frequency;
      if (sortMode === "marks") return (b.marks || 0) - (a.marks || 0) || b.frequency - a.frequency;
      if (sortMode === "topic") return a.topic.localeCompare(b.topic) || b.frequency - a.frequency;
      return b.frequency - a.frequency || b.latestYear - a.latestYear;
    });
  }, [questions, search, yearFilter, teacherFilter, topicFilter, sectionFilter, statusFilter, markFilter, sortMode, questionMemory]);

  const groupedQuestions = useMemo(() => {
    return filteredQuestions.reduce((groups, question) => {
      if (!groups[question.topic]) groups[question.topic] = [];
      groups[question.topic].push(question);
      return groups;
    }, {});
  }, [filteredQuestions]);

  const topicCounts = useMemo(() => {
    return questions.reduce((counts, question) => {
      question.topics.forEach((topic) => {
        counts[topic] = (counts[topic] || 0) + 1;
      });
      return counts;
    }, {});
  }, [questions]);

  const solvedCount = questions.filter((question) => getStatus(question.key) === "solved").length;
  const reviseCount = questions.filter((question) => getStatus(question.key) === "revise").length;
  const revisedTopicCount = Object.keys(topicMemory).length;
  const uncoveredTopicCount = SLIDE_SECTIONS.flatMap((section) => section.topics).filter(([, mapped]) => !topicCounts[mapped]).length;
  const markLabels = Object.fromEntries(MARK_BUCKETS.map(([id, label]) => [id, label]));
  const activeFilterLabels = [
    yearFilter.size ? `Year: ${Array.from(yearFilter).sort((a, b) => b - a).join(", ")}` : "",
    teacherFilter.size ? `Teacher: ${Array.from(teacherFilter).join(", ")}` : "",
    topicFilter.size ? `Topic: ${Array.from(topicFilter).join(", ")}` : "",
    sectionFilter.size ? `Section: ${Array.from(sectionFilter).join(", ")}` : "",
    statusFilter.size ? `Status: ${Array.from(statusFilter).join(", ")}` : "",
    markFilter.size ? `Marks: ${Array.from(markFilter).map((id) => markLabels[id]).join(", ")}` : "",
  ].filter(Boolean);
  const filteredOccurrenceCount = filteredQuestions.reduce((sum, question) => {
    const visibleOccurrences = question.occurrences.filter((occurrence) => {
      if (yearFilter.size && !yearFilter.has(occurrence.year)) return false;
      if (teacherFilter.size && !teacherFilter.has(occurrence.teacher)) return false;
      if (topicFilter.size && !topicFilter.has(occurrence.topic)) return false;
      if (sectionFilter.size && !sectionFilter.has(occurrence.section)) return false;
      return true;
    });

    return sum + visibleOccurrences.length;
  }, 0);

  const clearFilters = () => {
    setSearch("");
    setYearFilter(new Set());
    setTeacherFilter(new Set());
    setTopicFilter(new Set());
    setSectionFilter(new Set());
    setStatusFilter(new Set());
    setMarkFilter(new Set());
    setSortMode("frequency");
  };

  const openTopicQuestions = (topic) => {
    setTopicFilter(new Set([topic]));
    setActiveView("questions");
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  };

  return (
    <main className="min-h-screen bg-[#f4f7f8] text-slate-950">
      <header className="border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="border-l-4 border-teal-700 pl-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-800">CSE 3211</p>
            <h1 className="mt-1 text-2xl font-black tracking-normal text-slate-950 sm:text-3xl">Compiler Question Pattern Dashboard</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">Previous-year questions mapped against Azhar Sir and Shuvo Sir slide topics.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveView("questions")}
                className={`rounded-md border px-4 py-2 text-sm font-bold transition ${
                  activeView === "questions" ? "border-teal-700 bg-teal-700 text-white" : "border-slate-200 bg-white text-slate-700 hover:border-teal-700 hover:text-teal-800"
                }`}
              >
                Question Bank
              </button>
              <button
                type="button"
                onClick={() => setActiveView("slides")}
                className={`rounded-md border px-4 py-2 text-sm font-bold transition ${
                  activeView === "slides" ? "border-amber-700 bg-amber-700 text-white" : "border-slate-200 bg-white text-slate-700 hover:border-amber-700 hover:text-amber-800"
                }`}
              >
                Slide Topics
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatCard value={questions.length} label="Patterns" />
            <StatCard value={solvedCount} label="Solved" />
            <StatCard value={reviseCount} label="Revise" />
            <StatCard value={revisedTopicCount || uncoveredTopicCount} label={revisedTopicCount ? "Topics" : "Uncovered"} />
          </div>
        </div>
      </header>

      {activeView === "questions" ? (
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[330px_minmax(0,1fr)]">
        <aside className="h-fit rounded-lg border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-4 lg:max-h-[calc(100vh-2rem)] lg:overflow-y-auto">
          <label className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500" htmlFor="search">
            Search
          </label>
          <input
            id="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="topic, year, question"
            className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
          />

          <SectionLabel>Sort</SectionLabel>
          <select
            value={sortMode}
            onChange={(event) => setSortMode(event.target.value)}
            className="w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
          >
            {SORT_OPTIONS.map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>

          <SectionLabel>Year</SectionLabel>
          <div className="flex flex-wrap gap-2">
            <Chip active={yearFilter.size === 0} onClick={() => setYearFilter(new Set())}>All</Chip>
            {years.map((year) => (
              <Chip key={year} active={yearFilter.has(year)} onClick={() => toggleSetItem(setYearFilter, year)}>
                {year}
              </Chip>
            ))}
          </div>

          <SectionLabel>Teacher</SectionLabel>
          <div className="flex flex-wrap gap-2">
            {teachers.map((teacher) => (
              <Chip key={teacher} active={teacherFilter.has(teacher)} onClick={() => toggleSetItem(setTeacherFilter, teacher)} tone={teacher === "Shuvo Sir" ? "amber" : "teal"}>
                {teacher}
              </Chip>
            ))}
          </div>

          <SectionLabel>Section</SectionLabel>
          <div className="flex flex-wrap gap-2">
            {sectionOptions.map((section) => (
              <Chip key={section} active={sectionFilter.has(section)} onClick={() => toggleSetItem(setSectionFilter, section)}>
                Section {section}
              </Chip>
            ))}
          </div>

          <SectionLabel>Status</SectionLabel>
          <div className="flex flex-wrap gap-2">
            <Chip active={statusFilter.has("new")} onClick={() => toggleSetItem(setStatusFilter, "new")}>Fresh</Chip>
            <Chip active={statusFilter.has("solved")} onClick={() => toggleSetItem(setStatusFilter, "solved")}>Solved</Chip>
            <Chip active={statusFilter.has("revise")} onClick={() => toggleSetItem(setStatusFilter, "revise")} tone="amber">Revise</Chip>
          </div>

          <SectionLabel>Marks</SectionLabel>
          <div className="flex flex-wrap gap-2">
            {MARK_BUCKETS.map(([id, label]) => (
              <Chip key={id} active={markFilter.has(id)} onClick={() => toggleSetItem(setMarkFilter, id)}>
                {label}
              </Chip>
            ))}
          </div>

          <SectionLabel>Topics</SectionLabel>
          <div className="max-h-72 space-y-2 overflow-y-auto pr-1 lg:max-h-[38vh]">
            {topics.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => toggleSetItem(setTopicFilter, topic)}
                className={`flex w-full items-center justify-between rounded-md border px-3 py-2 text-left text-sm transition ${
                  topicFilter.has(topic) ? "border-teal-700 bg-teal-50 text-teal-900" : "border-slate-100 bg-slate-50 text-slate-700 hover:border-slate-200"
                }`}
              >
                <span className="font-medium">{topic}</span>
                <span className="text-xs text-slate-500">{topicCounts[topic] || 0}</span>
              </button>
            ))}
          </div>
        </aside>

        <section className="space-y-6">
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-teal-800">{filteredQuestions.length} of {questions.length} patterns shown</p>
                <h2 className="mt-1 text-2xl font-black tracking-normal">Question Bank</h2>
                <p className="mt-1 text-sm font-medium text-slate-500">{filteredOccurrenceCount} source questions in current filters</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setStatusFilter(new Set(["revise"]))}
                  className="rounded-md bg-amber-700 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-amber-800"
                >
                  Need to revise
                </button>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:text-slate-950"
                >
                  Clear filters
                </button>
              </div>
            </div>
            <div className="mt-4 h-2 rounded-full bg-slate-100">
              <div
                className="h-2 rounded-full bg-teal-700 transition-all"
                style={{ width: `${questions.length ? Math.max(4, (filteredQuestions.length / questions.length) * 100) : 0}%` }}
              />
            </div>
            {activeFilterLabels.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {activeFilterLabels.map((label) => (
                  <span key={label} className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-bold text-teal-800">
                    {label}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          {Object.entries(groupedQuestions).map(([topic, items]) => (
            <div key={topic} className="space-y-3">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <div>
                  <h3 className="text-lg font-black tracking-normal text-slate-950">{topic}</h3>
                  <p className="text-sm text-slate-500">{items.length} question patterns</p>
                </div>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-600">
                  {items.reduce((sum, item) => sum + item.frequency, 0)} occurrences
                </span>
              </div>

              {items.map((question) => (
                <QuestionCard
                  key={question.key}
                  question={question}
                  status={getStatus(question.key)}
                  setQuestionStatus={setQuestionStatus}
                />
              ))}
            </div>
          ))}

          {!filteredQuestions.length && (
            <div className="rounded-lg border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
              <h3 className="text-lg font-black tracking-normal">No matching questions</h3>
              <p className="mt-2 text-sm text-slate-500">Clear one or more filters to widen the bank.</p>
            </div>
          )}
        </section>
      </div>
      ) : (
        <section className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-amber-800">Teacher-wise slide names</p>
            <h2 className="mt-1 text-2xl font-black tracking-normal">Slide Topics</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              These are the topic names extracted from the two class slide PDFs. Use revise later for local topic memory, or open a topic to filter the question bank.
            </p>
          </div>

          <div className="grid gap-4 xl:grid-cols-2">
            {SLIDE_SECTIONS.map((section) => (
              <InstructorTopics
                key={section.teacher}
                section={section}
                topicCounts={topicCounts}
                topicFilter={topicFilter}
                openTopic={openTopicQuestions}
                isTopicMarked={isTopicMarked}
                toggleTopicMemory={toggleTopicMemory}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="min-w-[110px] rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <p className="text-2xl font-black leading-none text-slate-950">{value}</p>
      <p className="mt-1 text-xs font-medium text-slate-500">{label}</p>
    </div>
  );
}

function InstructorTopics({ section, topicCounts, topicFilter, openTopic, isTopicMarked, toggleTopicMemory }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="h-9 w-1.5 rounded-full" style={{ backgroundColor: section.accent }} />
          <div>
            <h3 className="font-black tracking-normal text-slate-950">{section.teacher}</h3>
            <p className="text-xs font-medium text-slate-500">{section.topics.length} slide topics</p>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {section.topics.map(([slideTopic, mappedTopic]) => {
          const marked = isTopicMarked(section.teacher, slideTopic);
          const selected = topicFilter.has(mappedTopic);
          return (
            <div key={slideTopic} className={`rounded-md border p-3 ${selected ? "border-teal-700 bg-teal-50" : "border-slate-100 bg-slate-50"}`}>
              <button type="button" onClick={() => openTopic(mappedTopic)} className="block w-full text-left">
                <span className="block text-sm font-bold leading-5 text-slate-900">{slideTopic}</span>
                <span className="mt-1 block text-xs font-medium uppercase tracking-[0.08em] text-slate-500">{topicCounts[mappedTopic] || 0} patterns</span>
                <span className="mt-2 block text-xs font-bold text-teal-800">Open questions</span>
              </button>
              <button
                type="button"
                onClick={() => toggleTopicMemory(section.teacher, slideTopic)}
                className={`mt-3 rounded-md border px-2.5 py-1 text-xs font-bold transition ${
                  marked ? "border-amber-700 bg-amber-700 text-white" : "border-slate-200 bg-white text-slate-600 hover:border-amber-700 hover:text-amber-800"
                }`}
              >
                Revise later
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function QuestionCard({ question, status, setQuestionStatus }) {
  const occurrenceText = question.occurrences
    .map((item) => `${item.year} ${item.section}-${item.code}`)
    .join(", ");

  return (
    <article className="rounded-lg border border-slate-200 bg-white shadow-sm transition hover:border-slate-300">
      <div className="grid grid-cols-[5px_minmax(0,1fr)]">
        <div className={status === "revise" ? "rounded-l-lg bg-amber-700" : status === "solved" ? "rounded-l-lg bg-emerald-700" : "rounded-l-lg bg-teal-700"} />
        <div className="p-4">
          <div className="flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
            <div className="flex flex-wrap gap-2">
              <MetaPill>{question.years.join(", ")}</MetaPill>
              <MetaPill>Section {question.sections.join("/")}</MetaPill>
              <MetaPill>{question.teacher}</MetaPill>
              {question.marks ? <MetaPill>{question.marks} marks</MetaPill> : <MetaPill>Unmarked</MetaPill>}
              {question.co ? <MetaPill>{question.co}</MetaPill> : null}
              <MetaPill>{question.frequency}x</MetaPill>
            </div>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => setQuestionStatus(question.key, "solved")}
                className={`rounded-md border px-3 py-1.5 text-sm font-bold transition ${
                  status === "solved" ? "border-emerald-700 bg-emerald-700 text-white" : "border-slate-200 bg-white text-slate-700 hover:border-emerald-700 hover:text-emerald-800"
                }`}
              >
                Done
              </button>
              <button
                type="button"
                onClick={() => setQuestionStatus(question.key, "revise")}
                className={`rounded-md border px-3 py-1.5 text-sm font-bold transition ${
                  status === "revise" ? "border-amber-700 bg-amber-700 text-white" : "border-slate-200 bg-white text-slate-700 hover:border-amber-700 hover:text-amber-800"
                }`}
              >
                Revise
              </button>
            </div>
          </div>

          <p className="mt-4 text-[15px] leading-7 text-slate-900">{question.text}</p>

          {question.diagrams.length ? (
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {question.diagrams.map((diagram) => (
                <img
                  key={diagram}
                  src={diagram}
                  alt="Question diagram"
                  className="max-h-[420px] w-full rounded-md border border-slate-200 bg-white object-contain p-2"
                  loading="lazy"
                />
              ))}
            </div>
          ) : null}

          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span className="font-bold uppercase tracking-[0.08em] text-slate-500">Occurrences</span>
            <span>{occurrenceText}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

function MetaPill({ children }) {
  return <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-bold text-slate-600">{children}</span>;
}
