import React, { useEffect, useMemo, useState } from "react";

const metadata = {
  courseCode: "CSE 4109",
  courseName: "Artificial Intelligence",
  institution: "Khulna University of Engineering & Technology",
  department: "Department of Computer Science and Engineering",
  exam: "B.Sc. Engineering 4th Year 1st Term Examination",
  artifactNote: "Term-final question pattern analysis; term-final label is inferred from the user prompt and exam format.",
  years: ["2017", "2018", "2019", "2020", "2021", "2024"],
  sections: ["SECTION A / Script A", "SECTION B / Script B"],
  answerPattern: "2017, 2018, 2019, 2021, 2024: any 3 per section; 2020: any 2 per section",
  marksPattern: "2017, 2018, 2019, 2021, 2024: 210 marks; 2020: 120 marks",
};

const sectionA = [
  { year: "2024", q: "1(a)", topic: "AI Fundamentals", subtopic: "AI definition; subfields; strong vs weak AI; AI techniques", marks: 20, type: "Long", text: "Artificial Intelligence aims to build systems that can perceive, reason, and act intelligently in dynamic environments. Define Artificial Intelligence and discuss four major areas or subfields of AI with suitable real-world examples. Explain the differences between Strong AI and Weak AI with examples. Analyze how AI techniques such as Search, Knowledge representation, or Learning contribute to solving real world problems in one selected domain such as healthcare, transportation, or agriculture." },
  { year: "2024", q: "1(b)", topic: "AI Fundamentals", subtopic: "Machine intelligence test", marks: 10, type: "Long", text: "How can you be certained that a machine or a program is intelligent?" },
  { year: "2024", q: "1(c)", topic: "Agents, PEAS & Environments", subtopic: "Learning agent properties", marks: 5, type: "Short", text: "What are the properties of a Learning Agents?" },
  { year: "2024", q: "2(a)", topic: "Fuzzy Logic & Fuzzy Expert Systems", subtopic: "Fuzzy logic system", marks: 10, type: "Short", text: "What is a Fuzzy Logic System? Explain." },
  { year: "2024", q: "2(b)", topic: "Fuzzy Logic & Fuzzy Expert Systems", subtopic: "FLS design; student performance; centroid method", marks: 25, type: "Problem", text: "Design a Fuzzy Logic System to evaluate student performance in an Artificial Intelligence course using exam score, class participation, and assignment quality as inputs and performance as output. Define linguistic variables and membership functions with diagram, construct a fuzzy rule base, and for E=78, C=6, A=85 demonstrate fuzzy inference and compute approximate performance using centroid method." },
  { year: "2024", q: "3(a)", topic: "Agents, PEAS & Environments", subtopic: "PEAS; task environment", marks: 10, type: "Long", text: "What is PEAS? Give description of the task environment for automated taxi driving and playing soccer." },
  { year: "2024", q: "3(b)", topic: "Uncertainty, Default Logic & Dempster-Shafer", subtopic: "Uncertainty types", marks: 10, type: "Long", text: "What is uncertainty? Explain different types of uncertainty using examples." },
  { year: "2024", q: "3(c)", topic: "Agents, PEAS & Environments", subtopic: "Reflex vs goal-based agent; learning in dynamic environment", marks: 15, type: "Long", text: "How does a simple reflex agent differ from a goal-based agent? Justify the statement that a learning agent is suitable for dynamic environment using an appropriate example." },
  { year: "2024", q: "4(a)", topic: "NLP, Grammar & Parse Trees", subtopic: "NLP; syntax; semantics; pragmatics", marks: 10, type: "Short", text: "What is NLP? Explain syntax, semantics, pragmatics using examples." },
  { year: "2024", q: "4(b)", topic: "Agents, PEAS & Environments", subtopic: "Sensors, actuators, environment", marks: 15, type: "Long", text: "Consider an artificial invigilator monitoring students in an exam hall. What are its sensors, actuators, and environment? Discuss how its sensors and actuators are well suited for its task." },
  { year: "2024", q: "4(c)", topic: "NLP, Grammar & Parse Trees", subtopic: "Grammar; syntactic tree", marks: 10, type: "Problem", text: "Construct a grammar for the sentence: \"The hunter shot the deer with his gun\". Also draw the syntactic tree." },
  { year: "2021", q: "1(a)", topic: "AI Fundamentals", subtopic: "AI definition; examples of intelligent systems", marks: 12, type: "Short", text: "What is artificial intelligence? To what extent are supermarket bar-code scanners, web search engines, voice-activated telephone menus, and internet routing algorithms instances of artificial intelligence? Explain." },
  { year: "2021", q: "1(b)", topic: "Agents, PEAS & Environments", subtopic: "Sensors, actuators, environment", marks: 13, type: "Long", text: "Consider a rabbit grazing in a carrot field. What are its sensors, actuators and environment? Discuss how its sensors and actuators are well suited to its environment." },
  { year: "2021", q: "1(c)", topic: "AI Fundamentals", subtopic: "AI classification; subfields", marks: 10, type: "Long", text: "Give a demystified classification of artificial intelligence. Justify the statement that most AI subfields focus on smaller components needed for intelligent programs." },
  { year: "2021", q: "2(a)", topic: "Search Fundamentals", subtopic: "Goal formulation vs problem formulation", marks: 8, type: "Short", text: "Explain why problem formulation must follow goal formulation." },
  { year: "2021", q: "2(b)", topic: "Agents, PEAS & Environments", subtopic: "PEAS; task environment properties", marks: 12, type: "Long", text: "What is PEAS? Give PEAS descriptions and task-environment characterizations for bidding on an auction item and automated taxi driving." },
  { year: "2021", q: "2(c)", topic: "Agents, PEAS & Environments", subtopic: "Agent types; learning agent", marks: 15, type: "Long", text: "How does a simple reflex agent differ from a goal based agent? Justify that a learning agent is suitable for a dynamic environment using an example." },
  { year: "2021", q: "3(a)", topic: "Fuzzy Logic & Fuzzy Expert Systems", subtopic: "Fuzzy logic system", marks: 10, type: "Short", text: "What is a fuzzy logic system? Explain." },
  { year: "2021", q: "3(b)", topic: "Fuzzy Logic & Fuzzy Expert Systems", subtopic: "Fuzzy set operations", marks: 10, type: "Long", text: "Explain different operations on fuzzy sets. Use pictorial view for clarity." },
  { year: "2021", q: "3(c)", topic: "Fuzzy Logic & Fuzzy Expert Systems", subtopic: "Fuzzy expert system design", marks: 15, type: "Problem", text: "Design a fuzzy logic based washing machine system using fuzzy expert system development methodology." },
  { year: "2021", q: "4(a)", topic: "CSP & Local Search", subtopic: "Graph coloring CSP", marks: 11, type: "Problem", text: "Formulate graph coloring problem as a constraint satisfaction problem. Draw the constraint graph for an arbitrary graph." },
  { year: "2021", q: "4(b)", topic: "NLP, Grammar & Parse Trees", subtopic: "Parse tree", marks: 5, type: "Short", text: "What is a parse tree in NLP and for what purpose is it used?" },
  { year: "2021", q: "4(c)", topic: "NLP, Grammar & Parse Trees", subtopic: "Grammar; syntactic tree", marks: 8, type: "Problem", text: "Construct a grammar for the sentence: \"The traveler shot the tiger with the gun\" and draw the syntactic tree." },
  { year: "2021", q: "4(d)", topic: "Probabilistic Reasoning & Bayesian Networks", subtopic: "Bayesian network factorization", marks: 11, type: "Problem", text: "Derive the joint probability function for a Bayesian network with Rush hour, Bad Weather, Accident, Traffic Jam, and Sirens." },

  { year: "2020", q: "1(a)", topic: "Agents, PEAS & Environments", subtopic: "Agent; learning agent structure", marks: 10, type: "Long", text: "What is an agent? Explain the structure of a learning agent." },
  { year: "2020", q: "1(b)", topic: "AI Fundamentals", subtopic: "Turing test", marks: 10, type: "Short", text: "What is the significance of Turing test in artificial intelligence? Explain briefly." },
  { year: "2020", q: "1(c)", topic: "Agents, PEAS & Environments", subtopic: "PEAS", marks: 10, type: "Long", text: "What is PEAS? Give PEAS descriptions for playing soccer and knitting a sweater." },
  { year: "2020", q: "2(a)", topic: "Fuzzy Logic & Fuzzy Expert Systems", subtopic: "Fuzzy expert system; A/C control", marks: 12, type: "Long", text: "Develop a general structure of a fuzzy expert system and explain it using the Air Conditional Control problem." },
  { year: "2020", q: "2(b)", topic: "Heuristic Search, A* & UCS", subtopic: "A* optimality", marks: 9, type: "Proof", text: "Justify: A* search is optimal if h(n) is consistent." },
  { year: "2020", q: "2(c)", topic: "Probabilistic Reasoning & Bayesian Networks", subtopic: "Bayes theorem", marks: 9, type: "Problem", text: "A doctor knows meningitis causes stiff neck 70% of the time. Prior P(meningitis)=1/50,000 and P(stiff neck)=1%. Calculate P(meningitis | stiff neck)." },
  { year: "2020", q: "3(a)", topic: "Adversarial Search & Game Playing", subtopic: "Adversarial search", marks: 8, type: "Short", text: "What do you mean by Adversarial search? Justify that game playing is one kind of adversarial search." },
  { year: "2020", q: "3(b)", topic: "CSP & Local Search", subtopic: "Local search; min-conflicts; n-queen", marks: 10, type: "Long", text: "What is local search? Explain how to use local search with min-conflict heuristic algorithm for solving n-queen problem." },
  { year: "2020", q: "3(c)", topic: "Adversarial Search & Game Playing", subtopic: "Tic-tac-toe; minimax", marks: 12, type: "Problem", text: "Given a Tic-Tac-Toe state where you are max and the computer is min, choose your move using min-max procedure and draw the complete search tree." },

  { year: "2019", q: "1(a)", topic: "AI Fundamentals", subtopic: "General intelligence; Turing-style testing", marks: 12, type: "Long", text: "How can you test whether a machine has reached the general intelligence level of human being? Explain it." },
  { year: "2019", q: "1(b)", topic: "Agents, PEAS & Environments", subtopic: "Intelligent agent; learning agent", marks: 13, type: "Long", text: "What is an intelligent agent? Explain the learning agent model elaborately." },
  { year: "2019", q: "1(c)", topic: "Agents, PEAS & Environments", subtopic: "PEAS", marks: 10, type: "Long", text: "What is PEAS? Give PEAS descriptions for automated car driving and automated robot cleaner." },
  { year: "2019", q: "2(a)", topic: "CSP & Local Search", subtopic: "Tree-structured CSP", marks: 10, type: "Problem", text: "What is CSP? Solve the tree structured CSP with colors Red, Green and Blue for a graph with edges A-C, B-C, C-D, D-E, D-F." },
  { year: "2019", q: "2(b)", topic: "CSP & Local Search", subtopic: "N-queen; min-conflicts", marks: 12, type: "Problem", text: "Develop a local search algorithm for solving N-Queen problem using min-conflict heuristic." },
  { year: "2019", q: "2(c)", topic: "Adversarial Search & Game Playing", subtopic: "Tic-tac-toe; minimax", marks: 13, type: "Problem", text: "Given a Tic-Tac-Toe state, choose your move using Mini-Max procedure and draw the complete search tree to show how you will find the state. Board is visually inferred from scan." },
  { year: "2019", q: "3(a)", topic: "Fuzzy Logic & Fuzzy Expert Systems", subtopic: "Fuzzy logic system", marks: 10, type: "Short", text: "What is a fuzzy logic system? Explain clearly." },
  { year: "2019", q: "3(b)", topic: "Fuzzy Logic & Fuzzy Expert Systems", subtopic: "Fuzzy set operations", marks: 10, type: "Long", text: "Discuss different operations on fuzzy sets. Use pictorial view for clarity." },
  { year: "2019", q: "3(c)", topic: "Fuzzy Logic & Fuzzy Expert Systems", subtopic: "Fuzzy expert system; A/C control", marks: 15, type: "Long", text: "Develop a general structure of a fuzzy expert system and explain it using a fuzzy logic controller of an A/C system." },
  { year: "2019", q: "4(a)", topic: "FOL, Logic & CNF", subtopic: "Unification", marks: 7, type: "Short", text: "What is unification in FOL? Why is it a key component in first-order inference algorithm?" },
  { year: "2019", q: "4(b)", topic: "FOL, Logic & CNF", subtopic: "Forward and backward chaining", marks: 15, type: "Proof", text: "Using forward chaining and backward chaining, prove that Col. West is a criminal from the given law, hostile nation, missiles, and American facts." },
  { year: "2019", q: "4(c)", topic: "FOL, Logic & CNF", subtopic: "CNF conversion", marks: 8, type: "Problem", text: "Convert the logic A <=> (B ∨ C) into CNF." },
  { year: "2019", q: "4(d)", topic: "FOL, Logic & CNF", subtopic: "FOL vs propositional logic", marks: 5, type: "Short", text: "What are the advantages of FOL over propositional logic?" },

  { year: "2018", q: "1(a)", topic: "Agents, PEAS & Environments", subtopic: "Agent; learning agent", marks: 12, type: "Long", text: "Define an Agent. Explain the structure of a learning agent. Use physical examples." },
  { year: "2018", q: "1(b)", topic: "Agents, PEAS & Environments", subtopic: "Perception-action cycle", marks: 13, type: "Long", text: "Describe the perception-action cycle of a robot which will move in a two dimensional grid world." },
  { year: "2018", q: "1(c)", topic: "Heuristic Search, A* & UCS", subtopic: "A* optimality", marks: 10, type: "Proof", text: "Justify: A* search is optimal if h(n) is consistent." },
  { year: "2018", q: "2(a)", topic: "Heuristic Search, A* & UCS", subtopic: "Heuristic function", marks: 10, type: "Long", text: "What is a heuristic function? Explain how to develop it for a particular problem." },
  { year: "2018", q: "2(b)", topic: "Agents, PEAS & Environments", subtopic: "PEAS", marks: 10, type: "Long", text: "What is PEAS? Give PEAS descriptions for playing soccer and knitting a sweater." },
  { year: "2018", q: "2(c)", topic: "Heuristic Search, A* & UCS", subtopic: "Greedy best-first vs A*", marks: 15, type: "Problem", text: "Given the Romania-style weighted graph and straight-line distances, determine whether greedy best-first or A* gives the better route from A to B." },
  { year: "2018", q: "3(a)", topic: "Search Fundamentals", subtopic: "Formal search problem", marks: 7, type: "Long", text: "How can you formally define a search problem? Explain using an example." },
  { year: "2018", q: "3(b)", topic: "Heuristic Search, A* & UCS", subtopic: "Uniform-cost search vs BFS", marks: 5, type: "Proof", text: "Justify that uniform-cost search acts like BFS when step costs are equal." },
  { year: "2018", q: "3(c)", topic: "Heuristic Search, A* & UCS", subtopic: "Search strategy comparison", marks: 10, type: "Proof", text: "Prove or give counterexamples: iterative deepening search performs much worse than DFS; uniform-cost search is a special case of A* search." },
  { year: "2018", q: "3(d)", topic: "Adversarial Search & Game Playing", subtopic: "Game tree; alpha-beta pruning", marks: 13, type: "Problem", text: "For a game tree with static scores, choose the first player's move and identify nodes not examined using alpha-beta pruning left-to-right." },
  { year: "2018", q: "4(a)", topic: "CSP & Local Search", subtopic: "CSP constraints", marks: 8, type: "Long", text: "What is a Constraint Satisfaction Problem? Explain the different types of constraints to be handled to solve CSPs." },
  { year: "2018", q: "4(b)", topic: "CSP & Local Search", subtopic: "N-queen; min-conflicts", marks: 9, type: "Problem", text: "Use local search with min-conflict heuristic algorithm to solve n-queen problem." },
  { year: "2018", q: "4(c)", topic: "Fuzzy Logic & Fuzzy Expert Systems", subtopic: "Fuzzy set vs classical set", marks: 6, type: "Short", text: "What is fuzzy set? Differentiate between fuzzy set and classical set." },
  { year: "2018", q: "4(d)", topic: "Fuzzy Logic & Fuzzy Expert Systems", subtopic: "Fuzzy rules; FAM", marks: 12, type: "Problem", text: "Construct fuzzy rules and a Fuzzy Associative Memory for identifying fresh fish using eyes and gills." },

  { year: "2017", q: "1(a)", topic: "AI Fundamentals", subtopic: "General intelligence; Turing-style testing", marks: 12, type: "Long", text: "How can you test whether a computer has reached the general intelligence level of human being? Explain it." },
  { year: "2017", q: "1(b)", topic: "Agents, PEAS & Environments", subtopic: "Perception-action cycle", marks: 13, type: "Long", text: "What is an agent? Explain the perception-action cycle of a point robot agent wandering in a two-dimensional grid world." },
  { year: "2017", q: "1(c)", topic: "Agents, PEAS & Environments", subtopic: "PEAS", marks: 10, type: "Long", text: "What is PEAS? Give PEAS descriptions for automated car driving and medical diagnosis system." },
  { year: "2017", q: "2(a)", topic: "Adversarial Search & Game Playing", subtopic: "Minimax; Tic-Tac-Toe", marks: 12, type: "Long", text: "What is a min-max procedure? Explain this procedure using Tic-Tac-Toe game." },
  { year: "2017", q: "2(b)", topic: "Heuristic Search, A* & UCS", subtopic: "Admissible heuristic; 8-puzzle", marks: 14, type: "Long", text: "What makes an admissible heuristic? Why is this important for search? Explain why number of misplaced squares for 8-puzzle is a bad idea even though admissible, and give a better heuristic." },
  { year: "2017", q: "2(c)", topic: "Search Fundamentals", subtopic: "Goal formulation vs problem formulation", marks: 9, type: "Long", text: "Why must problem formulation follow goal formulation? Explain." },
  { year: "2017", q: "3(a)", topic: "Fuzzy Logic & Fuzzy Expert Systems", subtopic: "Fuzzy vs crisp sets", marks: 10, type: "Long", text: "What is a fuzzy set? Differentiate between fuzzy and crisp sets using example." },
  { year: "2017", q: "3(b)", topic: "Fuzzy Logic & Fuzzy Expert Systems", subtopic: "Fuzzy linguistic hedges", marks: 10, type: "Long", text: "Explain different fuzzy linguistic hedges using examples." },
  { year: "2017", q: "3(c)", topic: "Fuzzy Logic & Fuzzy Expert Systems", subtopic: "Fuzzy expert system; A/C control", marks: 15, type: "Long", text: "Develop a general structure of a fuzzy expert system and explain it using Air conditioner control problem." },
  { year: "2017", q: "4(a)", topic: "CSP & Local Search", subtopic: "Graph coloring CSP", marks: 9, type: "Problem", text: "Formulate graph coloring problem as a constraint satisfaction problem. Draw the constraint graph for an arbitrary graph." },
  { year: "2017", q: "4(b)", topic: "Adversarial Search & Game Playing", subtopic: "Horizon effect", marks: 7, type: "Long", text: "Define horizon effect. Is there any way to overcome the horizon effect? Explain." },
  { year: "2017", q: "4(c)", topic: "CSP & Local Search", subtopic: "Forward checking; arc consistency", marks: 12, type: "Long", text: "What is the drawback of forward checking? How is arc consistency used to solve this?" },
  { year: "2017", q: "4(d)", topic: "Heuristic Search, A* & UCS", subtopic: "Uniform-cost search vs BFS", marks: 7, type: "Proof", text: "Prove that uniform cost search acts like BFS when step costs are equal." },
];

const sectionB = [
  { year: "2024", q: "5(a)", topic: "FOL, Propositional Logic & Inference", subtopic: "Propositionalization in FOL", marks: 7, type: "Long", text: "In propositionalization, we can solve any first order logic problem using propositional rules. Is this an effective method for inference in FOL? Discuss your view." },
  { year: "2024", q: "5(b)", topic: "Search & Game Playing", subtopic: "Tic-tac-toe heuristic; minimax depth 2", marks: 16, type: "Problem", text: "Consider the tic-toc-toe board with row 1: O, X, blank; row 2: O, O, X; row 3: blank, blank, blank. Design a simple heuristic function to evaluate non-terminal board states, generate the search tree up to depth 2, and apply minimax to determine the best move for X and explain whether this move guarantees a win, draw, or loss. CO3 is inferred." },
  { year: "2024", q: "5(c)", topic: "Search & Game Playing", subtopic: "Admissible and consistent heuristic", marks: 12, type: "Problem", text: "For graph A -> B = 2, A -> C = 5, B -> D = 4, C -> D = 1, D -> G = 3 with heuristic h(A)=6, h(B)=4, h(C)=2, h(D)=3, h(G)=0, determine whether h(n) is admissible and consistent." },
  { year: "2024", q: "6(a)", topic: "Search & Game Playing", subtopic: "BFS; DLS; IDS; bidirectional search", marks: 12, type: "Problem", text: "Consider a state where start state is 1 and each state k has successors 2k and 2k+1. Goal state is 11. List node visit order for breadth-first search, depth-limited search with limit 3, and iterative deepening search. Explain how bidirectional search would work and identify branching factor in each direction." },
  { year: "2024", q: "6(b)", topic: "CSP & Local Search", subtopic: "Sudoku CSP; MRV; Degree; LCV", marks: 16, type: "Problem", text: "Consider a partially filled 4x4 Sudoku grid: row 1 is 1, blank, 4, blank; row 2 is blank, 2, blank, 1; row 3 is blank, 3, blank, 4; row 4 is 2, blank, 1, blank. Formulate this as a CSP by defining variables, domain, and constraints, then use MRV, Degree, and LCV heuristics to select a variable, assign a value, and show how the assignment reduces domains of other variables." },
  { year: "2024", q: "6(c)", topic: "FOL, Propositional Logic & Inference", subtopic: "FOL representation; exactly one quantifier", marks: 7, type: "Problem", text: "Assuming predicates Parent(p,q) and Female(p), and constants Alice and Jack, express in first-order logic: Alice has exactly one child, a daughter; Alice and Jack have exactly one chile together; Alice has exactly one child with Jack and no children with anyone else. The OCR spelling 'chile' is preserved from the source." },
  { year: "2024", q: "7(a)", topic: "FOL, Propositional Logic & Inference", subtopic: "Entailment and conjunction", marks: 7, type: "Proof", text: "If KB entails alpha and KB entails beta, does it always follow that KB entails alpha and beta? Explain." },
  { year: "2024", q: "7(b)", topic: "Search & Game Playing", subtopic: "Alpha-beta pruning best and worst case", marks: 10, type: "Problem", text: "Consider a game tree with branching factor b=2 and depth d=3 where the root is a MAX node. Assign leaf values such that alpha-beta pruning performs best and worst. Draw complete trees for both cases showing all nodes and indicate pruned nodes." },
  { year: "2024", q: "7(c)", topic: "FOL, Propositional Logic & Inference", subtopic: "CNF conversion; resolution proof", marks: 18, type: "Proof", text: "Convert the FOL sentences about loving animals, killing animals, Jack, Tuna, cats, and animals into CNF. Then, using resolution, prove that Kills(Jack, Tuna) is false." },
  { year: "2024", q: "8(a)", topic: "Planning & Blocks World", subtopic: "Planning; SAG formulation; heuristic planning", marks: 25, type: "Long", text: "An autonomous delivery robot operates inside KUET campus and must plan actions to deliver a parcel from the Main Gate to the CSE building while avoiding blocked pathways and optimizing delivery time. Explain planning in AI and how it differs from traditional search-based problem solving. Represent the delivery task using State-Action-Goal formulation with initial state, goal state, and at least four actions with preconditions and effects. Discuss how heuristic or knowledge-based planning improves efficiency compared to blind search." },
  { year: "2024", q: "8(b)", topic: "FOL, Propositional Logic & Inference", subtopic: "Validity and satisfiability", marks: 10, type: "Problem", text: "Identify the valid and satisfiable sentences and justify the logic: (i) (p -> q) ∧ (¬p -> ¬q), (ii) (p ∧ q -> p)." },
  { year: "2021", q: "5(a)", topic: "AI Fundamentals", subtopic: "Intelligent system capabilities", marks: 8, type: "Short", text: "How can you decide whether a system is intelligent or not? Write down some capabilities of an AI system." },
  { year: "2021", q: "5(b)", topic: "FOL, Propositional Logic & Inference", subtopic: "Propositional representation; proof", marks: 12, type: "Proof", text: "Express the toddler/child/boy/girl facts in propositional logic and prove that the person is a girl." },
  { year: "2021", q: "5(c)", topic: "Knowledge-Based Agents & Wumpus World", subtopic: "Wumpus rules; proof", marks: 15, type: "Problem", text: "Given a 4x4 Wumpus world grid, derive rules and prove there is a Wumpus at position (1,3)." },
  { year: "2021", q: "6(a)", topic: "FOL, Propositional Logic & Inference", subtopic: "Limitations of propositional logic", marks: 5, type: "Short", text: "Write down the limitations of propositional logic." },
  { year: "2021", q: "6(b)", topic: "FOL, Propositional Logic & Inference", subtopic: "CNF conversion", marks: 8, type: "Problem", text: "Transform the implicative clause (Z -> Y) -> (~X -> (W ∧ P)) into Conjunctive Normal Form." },
  { year: "2021", q: "6(c)", topic: "Search & Game Playing", subtopic: "Tic-Tac-Toe heuristic", marks: 12, type: "Problem", text: "Given a Tic-Tac-Toe board where computer O must move, decide the better move using a heuristic function." },
  { year: "2021", q: "6(d)", topic: "Search & Game Playing", subtopic: "Alpha-beta pruning", marks: 10, type: "Long", text: "Discuss pruning conditions in alpha-beta pruning with a proper example." },
  { year: "2021", q: "7(a)", topic: "FOL, Propositional Logic & Inference", subtopic: "Quantifiers", marks: 5, type: "Short", text: "Write down the properties of quantifiers used in First-Order Logic." },
  { year: "2021", q: "7(b)", topic: "FOL, Propositional Logic & Inference", subtopic: "Universal/existential quantifier mistakes", marks: 12, type: "Long", text: "Discuss common mistakes of universal and existential quantifier in FOL with proper example." },
  { year: "2021", q: "7(c)", topic: "FOL, Propositional Logic & Inference", subtopic: "FOL representation", marks: 18, type: "Problem", text: "Represent sentences about houses, physical objects, ownership, Sue, and Peter into FOL." },
  { year: "2021", q: "8(a)", topic: "Search & Game Playing", subtopic: "Uniform-cost search", marks: 12, type: "Problem", text: "Find a path to destination node J from S using uniform cost search for the given directed weighted graph." },
  { year: "2021", q: "8(b)", topic: "Search & Game Playing", subtopic: "A* vs greedy best-first", marks: 10, type: "Long", text: "Which search strategy is better between A* search and greedy best first search and why?" },
  { year: "2021", q: "8(c)", topic: "Planning & Blocks World", subtopic: "Forward planning; blocks world", marks: 13, type: "Problem", text: "For a Blocks World planning problem, design actions and show the sequence of actions using forward planning." },

  { year: "2020", q: "4(a)", topic: "Knowledge-Based Agents & Wumpus World", subtopic: "Knowledge-based agent; declarative approach", marks: 8, type: "Long", text: "How can you construct a knowledge-based agent using declarative approach? Use examples." },
  { year: "2020", q: "4(b)", topic: "FOL, Propositional Logic & Inference", subtopic: "Unification; inference rules", marks: 9, type: "Long", text: "What is unification in FOL? Explain different inference rules for FOL." },
  { year: "2020", q: "4(c)", topic: "FOL, Propositional Logic & Inference", subtopic: "Forward/backward chaining", marks: 13, type: "Proof", text: "Use forward and backward chaining to prove that curiosity killed the cat from the given knowledge domain." },
  { year: "2020", q: "5(a)", topic: "NLP, Grammar & Parse Trees", subtopic: "Labeled bracketing", marks: 10, type: "Problem", text: "Do the label bracket of the parse tree for the sentence: the dog chased a cat into the garden." },
  { year: "2020", q: "5(b)", topic: "Uncertainty, Default Logic & Dempster-Shafer", subtopic: "Uncertainty approaches; default reasoning", marks: 12, type: "Long", text: "List several approaches for handling uncertainty and briefly discuss default reasoning." },
  { year: "2020", q: "5(c)", topic: "Planning & Blocks World", subtopic: "Planning definition and goals", marks: 8, type: "Short", text: "Define planning. Write down the goals of planning." },
  { year: "2020", q: "6(a)", topic: "NLP, Grammar & Parse Trees", subtopic: "Syntax, semantics, pragmatics, discourse", marks: 8, type: "Short", text: "Define syntax, semantics, pragmatics and discourse with example." },
  { year: "2020", q: "6(b)", topic: "Probabilistic Reasoning & Bayesian Networks", subtopic: "Alarm Bayesian network", marks: 12, type: "Problem", text: "Define probabilistic reasoning and compute P(J,M,A,¬B,¬E) and P(J,M,A,E,B) for the Alarm Bayesian Network." },
  { year: "2020", q: "6(c)", topic: "Probabilistic Reasoning & Bayesian Networks", subtopic: "Joint probability table", marks: 10, type: "Problem", text: "Using the cavity/toothache/catch joint distribution, find p(¬toothache), p(cavity ∧ toothache), p(toothache | cavity), and p(¬cavity | toothache)." },

  { year: "2019", q: "5(a)", topic: "Probabilistic Reasoning & Bayesian Networks", subtopic: "Exact vs approximate inference", marks: 5, type: "Short", text: "What are the differences between Exact Inference and Approximate Inference? Which techniques are used for Approximate Inference?" },
  { year: "2019", q: "5(b)", topic: "Probabilistic Reasoning & Bayesian Networks", subtopic: "Marginal independence; joint table", marks: 5, type: "Problem", text: "What is Marginal independence? Calculate p(cavity ∧ toothache), p(cavity), p(cavity | toothache), and p(¬cavity | toothache)." },
  { year: "2019", q: "5(c)", topic: "Probabilistic Reasoning & Bayesian Networks", subtopic: "Alarm Bayesian network", marks: 10, type: "Problem", text: "Draw the Alarm Bayesian Network and calculate P(¬J, ¬M, A, B, E) and P(J, M, A, ¬E, ¬B). Second probability is inferred from blurry scan." },
  { year: "2019", q: "5(d)", topic: "Knowledge-Based Agents & Wumpus World", subtopic: "Wumpus Bayesian inference", marks: 15, type: "Problem", text: "For a Wumpus world, find p(P1,3 | known, b) using Bayesian Inference and show every consistent model for frontier variables P2,2 and P3,1." },
  { year: "2019", q: "6(a)", topic: "Uncertainty, Default Logic & Dempster-Shafer", subtopic: "Uncertainty reasoning approaches", marks: 12, type: "Long", text: "What are the other approaches for uncertainty reasoning? Give a description of them." },
  { year: "2019", q: "6(b)", topic: "Probabilistic Reasoning & Bayesian Networks", subtopic: "Bayesian Net vs Dynamic Bayesian Net", marks: 6, type: "Long", text: "What are the differences between typical Bayesian Net and Dynamic Bayesian Net? Draw necessary figures." },
  { year: "2019", q: "6(c)", topic: "Probabilistic Reasoning & Bayesian Networks", subtopic: "Markov process order", marks: 5, type: "Short", text: "Does the order of the Markov process impact inference accuracy? Explain why or why not." },
  { year: "2019", q: "6(d)", topic: "Probabilistic Reasoning & Bayesian Networks", subtopic: "Hidden Markov Model; robot localization", marks: 12, type: "Problem", text: "Using Hidden Markov Model derive equations for transition and sensor probability for Robot Localization." },
  { year: "2019", q: "7(a)", topic: "Probabilistic Reasoning & Bayesian Networks", subtopic: "Probabilistic vs logical agent; prior/posterior", marks: 5, type: "Short", text: "What are the main differences between a probabilistic agent and logical agent? Define Prior and Posterior." },
  { year: "2019", q: "7(b)", topic: "Probabilistic Reasoning & Bayesian Networks", subtopic: "Bayes theorem; meningitis", marks: 5, type: "Problem", text: "Given stiff neck and meningitis probabilities, calculate p(m | s)." },
  { year: "2019", q: "7(c)", topic: "Probabilistic Reasoning & Bayesian Networks", subtopic: "Noisy-Or CPT", marks: 10, type: "Problem", text: "Given q_cold, q_flu, and q_malaria, build a conditional probability table using noisy-Or assumption." },
  { year: "2019", q: "7(d)", topic: "Probabilistic Reasoning & Bayesian Networks", subtopic: "Inference by enumeration", marks: 15, type: "Problem", text: "For the Alarm Bayesian Network, use inference by enumeration to calculate p(B | J, m) with proper diagram." },
  { year: "2019", q: "8(a)", topic: "Probabilistic Reasoning & Bayesian Networks", subtopic: "Probability axioms", marks: 5, type: "Proof", text: "Prove that p(¬A) = 1 - p(A) using axioms." },
  { year: "2019", q: "8(b)", topic: "Probabilistic Reasoning & Bayesian Networks", subtopic: "Bayesian model; recommendation", marks: 10, type: "Long", text: "Explain a Bayesian model for an online book retailer's posterior product evaluation problem involving kind and dishonest customers." },
  { year: "2019", q: "8(c)", topic: "Uncertainty, Default Logic & Dempster-Shafer", subtopic: "Dempster-Shafer theory", marks: 6, type: "Long", text: "What is Dempster-Shafer Theory? Explain with example." },
  { year: "2019", q: "8(d)", topic: "Fuzzy Logic & Fuzzy Expert Systems", subtopic: "Fuzzy sets and fuzzy logic", marks: 6, type: "Short", text: "Explain fuzzy sets and fuzzy logic with example." },
  { year: "2019", q: "8(e)", topic: "Probabilistic Reasoning & Bayesian Networks", subtopic: "Dynamic Bayesian Network", marks: 8, type: "Long", text: "Explain state model and transition model in Dynamic Bayesian Network with proper figures and examples." },

  { year: "2018", q: "5(a)", topic: "FOL, Propositional Logic & Inference", subtopic: "Resolution refutation", marks: 11, type: "Long", text: "What do you mean by resolution refutations? Explain using an example." },
  { year: "2018", q: "5(b)", topic: "Uncertainty, Default Logic & Dempster-Shafer", subtopic: "Uncertainty", marks: 8, type: "Long", text: "What is uncertainty? How do you deal with uncertainty? Explain with example." },
  { year: "2018", q: "5(c)", topic: "Probabilistic Reasoning & Bayesian Networks", subtopic: "Probabilistic vs worst-case reasoning", marks: 6, type: "Short", text: "Write down the differences between probabilistic and worst-case reasoning." },
  { year: "2018", q: "5(d)", topic: "Knowledge-Based Agents & Wumpus World", subtopic: "Wumpus entailment; completeness", marks: 10, type: "Problem", text: "Given a 2-cell Wumpus truth table, decide whether KB |= P2,1 and explain completeness of an inference procedure." },
  { year: "2018", q: "6(a)", topic: "Uncertainty, Default Logic & Dempster-Shafer", subtopic: "Dempster-Shafer mass computation", marks: 15, type: "Problem", text: "Given Mfreeze and Mstorm evidence/mass tables for S, R, D, compute Mboth and belief values." },
  { year: "2018", q: "6(b)", topic: "Uncertainty, Default Logic & Dempster-Shafer", subtopic: "Dempster-Shafer theory", marks: 6, type: "Long", text: "What is Dempster/Shaffer theory? Explain with examples." },
  { year: "2018", q: "6(c)", topic: "FOL, Propositional Logic & Inference", subtopic: "FOL vs propositional logic", marks: 5, type: "Short", text: "Write down the differences between first order logic and propositional logic." },
  { year: "2018", q: "6(d)", topic: "FOL, Propositional Logic & Inference", subtopic: "FOL translation", marks: 9, type: "Problem", text: "Translate Hoofers club, knowledgeable women, and fruit sentences into FOL sentences." },
  { year: "2018", q: "7(a)", topic: "NLP, Grammar & Parse Trees", subtopic: "Syntax, semantics, pragmatics, discourse", marks: 9, type: "Short", text: "Define syntax, semantics, pragmatics and discourse with example." },
  { year: "2018", q: "7(b)", topic: "Probabilistic Reasoning & Bayesian Networks", subtopic: "Bayes Net CPD parameters", marks: 8, type: "Problem", text: "For a graphical model A -> C, A -> D, B -> D with binary variables, determine the number of CPD parameters needed." },
  { year: "2018", q: "7(c)", topic: "Machine Learning & Decision Trees", subtopic: "Entropy; decision tree", marks: 14, type: "Problem", text: "Using GPA and Studied data to predict Passed, compute H(Passed), H(Passed | GPA), and draw the full decision tree." },
  { year: "2018", q: "7(d)", topic: "FOL, Propositional Logic & Inference", subtopic: "Unification", marks: 4, type: "Short", text: "What is unification? Why is it so important to FOL?" },
  { year: "2018", q: "8(a)", topic: "NLP, Grammar & Parse Trees", subtopic: "Parse tree", marks: 5, type: "Short", text: "What is a parse tree in NLP, and for what is it used?" },
  { year: "2018", q: "8(b)", topic: "NLP, Grammar & Parse Trees", subtopic: "Grammar; syntactic tree", marks: 9, type: "Problem", text: "Construct a grammar for the sentence: \"The policeman shot the theif with the gun\". Also draw the syntactic tree." },
  { year: "2018", q: "8(c)", topic: "Rule-Based Expert Systems", subtopic: "Rule-based expert system", marks: 8, type: "Long", text: "What is rule based expert system? Explain basic structure of a rule based expert system." },
  { year: "2018", q: "8(d)", topic: "Probabilistic Reasoning & Bayesian Networks", subtopic: "Alarm Bayesian network", marks: 13, type: "Problem", text: "Define probabilistic reasoning. For the Alarm Domain BN, compute P(¬J, ¬M, B, E) and P(J, M, A, ¬E, B)." },

  { year: "2017", q: "5(a)", topic: "FOL, Propositional Logic & Inference", subtopic: "Propositional logic", marks: 7, type: "Short", text: "What is propositional logic? With respect to AI, what is it good for?" },
  { year: "2017", q: "5(b)", topic: "Knowledge-Based Agents & Wumpus World", subtopic: "Knowledge-based agent architecture", marks: 10, type: "Long", text: "Define knowledge based agent. Write down the architecture of a knowledge based Agent." },
  { year: "2017", q: "5(c)", topic: "Knowledge-Based Agents & Wumpus World", subtopic: "Knowledge-domain diagram", marks: 8, type: "Long", text: "Explain what each letter in the given knowledge-domain diagram represents. Topic is inferred because the OCR only describes the diagram labels." },
  { year: "2017", q: "5(d)", topic: "Knowledge-Based Agents & Wumpus World", subtopic: "Wumpus entailment; completeness", marks: 10, type: "Problem", text: "Given a 2-cell Wumpus truth table, decide whether the knowledge base entails P2,1 and explain completeness of an inference procedure." },
  { year: "2017", q: "6(a)", topic: "Probabilistic Reasoning & Bayesian Networks", subtopic: "Alarm Bayesian network", marks: 13, type: "Problem", text: "Define probabilistic reasoning. For the Alarm Domain BN, compute P(J, M, A, ¬B, ¬E) and P(J, M, A, E, B)." },
  { year: "2017", q: "6(b)", topic: "Uncertainty, Default Logic & Dempster-Shafer", subtopic: "Uncertainty types", marks: 7, type: "Long", text: "What is uncertainty? What are the types of uncertainty? Explain with suitable examples." },
  { year: "2017", q: "6(c)", topic: "Uncertainty, Default Logic & Dempster-Shafer", subtopic: "Handling uncertainty", marks: 10, type: "Long", text: "List the approaches for handling uncertainty. Explain one of them." },
  { year: "2017", q: "6(d)", topic: "Knowledge-Based Agents & Wumpus World", subtopic: "Problem domain vs knowledge domain", marks: 5, type: "Short", text: "Make a relationship between Problem Domain and Knowledge Domain." },
  { year: "2017", q: "7(a)", topic: "NLP, Grammar & Parse Trees", subtopic: "NLP; grammar; syntactic tree", marks: 15, type: "Problem", text: "What do you mean by NLP? Construct a grammar for the sentence: \"The fact that fishes swim astonished him\" and draw the syntactic tree." },
  { year: "2017", q: "7(b)", topic: "NLP, Grammar & Parse Trees", subtopic: "Syntax, semantics, pragmatics, discourse", marks: 12, type: "Short", text: "Define syntax, semantics, pragmatics and discourse with example." },
  { year: "2017", q: "7(c)", topic: "Uncertainty, Default Logic & Dempster-Shafer", subtopic: "Default logic", marks: 8, type: "Long", text: "What do you mean by default logic? Give formal definition of default logic." },
  { year: "2017", q: "8(a)", topic: "Uncertainty, Default Logic & Dempster-Shafer", subtopic: "Dempster-Shafer theory", marks: 6, type: "Long", text: "What do you mean Dempster/Shaffer theory? Explain with examples." },
  { year: "2017", q: "8(b)", topic: "Uncertainty, Default Logic & Dempster-Shafer", subtopic: "Dempster-Shafer mass computation", marks: 15, type: "Problem", text: "Given Mfreeze and Mstorm evidence/mass tables for S, R, D, compute Mboth and belief values." },
  { year: "2017", q: "8(c)", topic: "Rule-Based Expert Systems", subtopic: "Rule-based expert system", marks: 9, type: "Long", text: "What is rule based expert system? Explain basic structure of a rule based expert system." },
  { year: "2017", q: "8(d)", topic: "Rule-Based Expert Systems", subtopic: "Conflict resolution", marks: 5, type: "Long", text: "What is conflict resolution? Explain with examples." },
];

const insights = [
  "Must-study: Section A repeatedly opens with AI fundamentals, intelligent agents, learning agents, perception-action cycles, and PEAS. These appear across all five years.",
  "Must-study: Fuzzy logic is one of the strongest Section A patterns. Prepare definitions, fuzzy/crisp comparison, fuzzy set operations, linguistic hedges, expert-system architecture, A/C control, washing machine, and FAM examples.",
  "Must-study: CSP and local search recur heavily in Section A through graph coloring, tree-structured CSP, forward checking, arc consistency, n-queen, and min-conflicts.",
  "Must-study: Search strategy comparison is a stable examiner favorite: A* optimality with consistent heuristics, admissible heuristics, UCS vs BFS, greedy vs A*, and formal problem formulation.",
  "Must-study: Game playing is asked both theoretically and numerically. Practice minimax, tic-tac-toe trees, alpha-beta pruning, heuristic move choice, and horizon effect.",
  "Section B is probability-dominant. Bayesian networks, Alarm domain, enumeration, Markov/HMM, noisy-Or, and joint probability tables are the highest-yield Section B cluster.",
  "Logic alternates between representation and proof. Prepare propositional logic limits/CNF, FOL quantifiers, FOL translation, unification, resolution, and forward/backward chaining proofs.",
  "Uncertainty reasoning is a second major Section B pillar. Dempster-Shafer tables, default reasoning, uncertainty types, and handling-uncertainty approaches have repeated over several years.",
  "NLP is overlooked but recurring. Parse trees, grammar construction, labeled bracketing, and syntax/semantics/pragmatics/discourse definitions can return as compact mark-scoring questions.",
  "Planning and expert systems are lower-frequency but important. Blocks World forward planning, planning goals, rule-based expert systems, and conflict resolution are likely short-to-medium questions.",
  "Probable examiner style: mix conceptual definitions with one or two numerical/proof problems per section. Tables/BN/CSP/game-tree questions often carry 10-15 marks.",
  "Inferred caution: OCR-blurry items in 2019 tic-tac-toe board and 2019 Alarm BN probability should be verified against the original scan before exact solution practice."
];

function unique(arr) {
  return [...new Set(arr)];
}

function groupByTopic(items) {
  return items.reduce((acc, item) => {
    acc[item.topic] = acc[item.topic] || [];
    acc[item.topic].push(item);
    return acc;
  }, {});
}

function makeStats(items) {
  return Object.entries(groupByTopic(items))
    .map(([topic, qs]) => {
      const years = unique(qs.map((q) => q.year)).sort();
      const marks = qs.reduce((sum, q) => sum + q.marks, 0);
      return {
        topic,
        questions: qs.length,
        marks,
        years,
        high: qs.length >= 5 || years.length >= 3,
        qs,
      };
    })
    .sort((a, b) => b.questions - a.questions || b.marks - a.marks || a.topic.localeCompare(b.topic));
}

function typeCounts(items) {
  return Object.entries(items.reduce((acc, item) => {
    acc[item.type] = (acc[item.type] || 0) + 1;
    return acc;
  }, {})).sort((a, b) => b[1] - a[1]);
}

function yearTrend(items, topic) {
  return metadata.years.map((year) => ({
    year,
    count: items.filter((item) => item.year === year && item.topic === topic).length,
    marks: items.filter((item) => item.year === year && item.topic === topic).reduce((sum, item) => sum + item.marks, 0),
  }));
}

function badgeClass(kind) {
  const map = {
    Short: "bg-slate-100 text-slate-700 border-slate-200",
    Long: "bg-blue-50 text-blue-700 border-blue-200",
    Problem: "bg-violet-50 text-violet-700 border-violet-200",
    Proof: "bg-amber-50 text-amber-700 border-amber-200",
  };
  return map[kind] || "bg-slate-100 text-slate-700 border-slate-200";
}

function Card({ children, className = "" }) {
  return <div className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${className}`}>{children}</div>;
}

function Pill({ children, className = "" }) {
  return <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${className}`}>{children}</span>;
}

function StatCard({ label, value, detail }) {
  return (
    <Card className="bg-gradient-to-br from-[#048c4b] via-[#048c4b] to-[#048c4b] text-white">
      <div className="text-sm text-white/90">{label}</div>
      <div className="mt-2 text-3xl font-black tracking-tight">{value}</div>
      <div className="mt-1 text-xs text-white/90">{detail}</div>
    </Card>
  );
}

function TopicTable({ title, stats }) {
  return (
    <Card>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-black text-slate-900">{title}</h2>
          <p className="text-sm text-slate-500">High-frequency = asked in at least 3 years or at least 5 subquestions.</p>
        </div>
        <Pill className="border-[#048c4b]/20 bg-[#048c4b]/6 text-[#048c4b]">{stats.filter((s) => s.high).length} high-frequency topics</Pill>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-separate border-spacing-y-2 text-left text-sm">
          <thead>
            <tr className="text-xs uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2">Topic</th>
              <th className="px-3 py-2"># Questions</th>
              <th className="px-3 py-2"># Marks</th>
              <th className="px-3 py-2">Years asked</th>
              <th className="px-3 py-2">Badge</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((row) => (
              <tr key={row.topic} className="rounded-xl bg-slate-50 align-middle">
                <td className="rounded-l-xl px-3 py-3 font-bold text-slate-800">{row.topic}</td>
                <td className="px-3 py-3 font-semibold">{row.questions}</td>
                <td className="px-3 py-3 font-semibold">{row.marks}</td>
                <td className="px-3 py-3 text-slate-600">{row.years.join(", ")}</td>
                <td className="rounded-r-xl px-3 py-3">
                  {row.high ? <Pill className="border-[#048c4b]/20 bg-[#048c4b]/6 text-[#048c4b]">High</Pill> : <Pill className="border-slate-200 bg-white text-slate-500">Watch</Pill>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

function MiniTrend({ items, topic }) {
  const trend = yearTrend(items, topic);
  const max = Math.max(1, ...trend.map((d) => d.count));
  return (
    <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${metadata.years.length}, minmax(0, 1fr))` }}>
      {trend.map((d) => (
        <div key={d.year} className="rounded-xl bg-slate-50 p-2 text-center">
          <div className="mb-1 text-[10px] font-bold text-slate-500">{d.year}</div>
          <div className="mx-auto flex h-14 w-4 items-end rounded-full bg-[#048c4b]/10">
            <div className="w-4 rounded-full bg-[#048c4b]" style={{ height: `${(d.count / max) * 100}%`, minHeight: d.count ? 8 : 0 }} />
          </div>
          <div className="mt-1 text-xs font-bold text-slate-700">{d.count}</div>
        </div>
      ))}
    </div>
  );
}

function FrequencyAnalysis({ all, sectionAStats, sectionBStats }) {
  const combinedStats = makeStats(all);
  const typeData = typeCounts(all);
  const maxType = Math.max(...typeData.map(([, count]) => count));
  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-xl font-black text-slate-900">Top recurring topics + year trend</h2>
        <p className="mt-1 text-sm text-slate-500">Bars show number of subquestions in each year across both sections.</p>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {combinedStats.slice(0, 8).map((row) => (
            <div key={row.topic} className="rounded-2xl border border-slate-200 p-4">
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <div className="font-black text-slate-900">{row.topic}</div>
                  <div className="text-sm text-slate-500">{row.questions} questions · {row.marks} marks · {row.years.join(", ")}</div>
                </div>
                {row.high && <Pill className="border-[#048c4b]/20 bg-[#048c4b]/6 text-[#048c4b]">High</Pill>}
              </div>
              <MiniTrend items={all} topic={row.topic} />
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="text-xl font-black text-slate-900">Common question types</h2>
          <div className="mt-5 space-y-3">
            {typeData.map(([type, count]) => (
              <div key={type}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-bold text-slate-700">{type}</span>
                  <span className="font-black text-slate-900">{count}</span>
                </div>
                <div className="h-3 rounded-full bg-[#048c4b]/10">
                  <div className="h-3 rounded-full bg-[#048c4b]" style={{ width: `${(count / maxType) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500">No MCQ pattern detected in the OCR bank. The dominant forms are explanation, proof, and numerical/problem-solving.</p>
        </Card>

        <Card>
          <h2 className="text-xl font-black text-slate-900">Section contrast</h2>
          <div className="mt-4 grid gap-3">
            <div className="rounded-xl border border-[#048c4b]/20 bg-white p-4">
              <div className="font-black text-[#048c4b]">Section A pattern</div>
              <div className="mt-1 text-sm text-slate-700">Concept-heavy: agents, PEAS, fuzzy logic, CSP, heuristic search, minimax/A* comparisons.</div>
            </div>
            <div className="rounded-xl border border-[#048c4b]/20 bg-white p-4">
              <div className="font-black text-[#048c4b]">Section B pattern</div>
              <div className="mt-1 text-sm text-slate-700">Computation-heavy: Bayesian networks, probability tables, Dempster-Shafer, FOL proofs, Wumpus, NLP grammar.</div>
            </div>
            <div className="rounded-xl bg-amber-50 p-4">
              <div className="font-black text-amber-900">Shift note</div>
              <div className="mt-1 text-sm text-amber-800">2021 Section B uniquely brings back search/game-playing and planning in a larger way than 2017-2020.</div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-6">
        <TopicTable title="Section A high-frequency snapshot" stats={sectionAStats.slice(0, 5)} />
        <TopicTable title="Section B high-frequency snapshot" stats={sectionBStats.slice(0, 5)} />
      </div>
    </div>
  );
}

function QuestionList({ title, items }) {
  const [selectedYear, setSelectedYear] = useState("All");
  const [openTopics, setOpenTopics] = useState({});
  const availableYears = useMemo(
    () => ["All", ...unique(items.map((item) => item.year)).sort((a, b) => b.localeCompare(a))],
    [items]
  );
  const filteredItems = useMemo(
    () => selectedYear === "All" ? items : items.filter((item) => item.year === selectedYear),
    [items, selectedYear]
  );
  const stats = makeStats(filteredItems);
  const totalMarks = filteredItems.reduce((sum, item) => sum + item.marks, 0);
  const toggleTopic = (topic) => {
    setOpenTopics((current) => ({ ...current, [topic]: !current[topic] }));
  };
  const handleYearChange = (year) => {
    setSelectedYear(year);
    setOpenTopics({});
  };

  return (
    <div className="space-y-5">
      <Card>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-black text-slate-900">{title}</h2>
            <p className="mt-1 text-sm text-slate-500">Exact questions are grouped by normalized topic. Click a topic name to expand its question list.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2 rounded-2xl bg-slate-50 p-2">
            <span className="px-2 text-xs font-bold uppercase tracking-wide text-slate-500">Filter by year</span>
            {availableYears.map((year) => (
              <button
                key={year}
                onClick={() => handleYearChange(year)}
                className={`rounded-xl px-3 py-2 text-sm font-bold transition ${selectedYear === year ? "bg-[#048c4b] text-white shadow" : "bg-white text-slate-600 hover:bg-[#048c4b]/6"}`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Pill className="border-slate-200 bg-white text-slate-700">Showing: {selectedYear === "All" ? "All years" : selectedYear}</Pill>
          <Pill className="border-slate-200 bg-white text-slate-700">{filteredItems.length} questions</Pill>
          <Pill className="border-slate-200 bg-white text-slate-700">{totalMarks} marks</Pill>
          <Pill className="border-slate-200 bg-white text-slate-700">{stats.length} topics</Pill>
        </div>
      </Card>

      {filteredItems.length === 0 ? (
        <Card>
          <p className="text-sm text-slate-600">No questions found for this year.</p>
        </Card>
      ) : (
        stats.map((group) => {
          const isOpen = Boolean(openTopics[group.topic]);
          return (
            <Card key={group.topic} className="question-card overflow-hidden">
              <button
                type="button"
                onClick={() => toggleTopic(group.topic)}
                className="topic-toggle flex w-full flex-wrap items-center justify-between gap-3 rounded-2xl p-2 text-left"
                aria-expanded={isOpen}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-lg font-black text-slate-900">{group.topic}</span>
                    <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-black text-slate-600">{isOpen ? "−" : "+"}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">Frequency: {group.questions} questions · {group.marks} marks · Years: {group.years.join(", ")}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {group.high ? <Pill className="border-[#048c4b]/20 bg-[#048c4b]/6 text-[#048c4b]">High-frequency</Pill> : <Pill className="border-slate-200 bg-white text-slate-500">Lower-frequency</Pill>}
                  <Pill className="border-slate-200 bg-white text-slate-600">{isOpen ? "Hide questions" : "Show questions"}</Pill>
                </div>
              </button>

              {isOpen && (
                <div className="topic-panel mt-4 space-y-3 border-t border-slate-200 pt-4">
                  {group.qs.sort((a, b) => b.year.localeCompare(a.year) || a.q.localeCompare(b.q)).map((item) => (
                    <div key={`${item.year}-${item.q}-${item.subtopic}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <Pill className="border-slate-300 bg-white text-slate-700">{item.year} · {item.q}</Pill>
                        <Pill className="border-slate-300 bg-white text-slate-700">{item.marks} marks</Pill>
                        <Pill className={badgeClass(item.type)}>{item.type}</Pill>
                        <Pill className="border-indigo-200 bg-indigo-50 text-indigo-700">{item.subtopic}</Pill>
                      </div>
                      <p className="text-sm leading-6 text-slate-700">{item.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          );
        })
      )}
    </div>
  );
}

function Summary({ sectionAStats, sectionBStats, allStats, all }) {
  const totalTopics = allStats.length;
  const highTopics = allStats.filter((s) => s.high);
  const totalQuestions = all.length;
  const totalMarks = all.reduce((sum, q) => sum + q.marks, 0);
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Years analyzed" value={metadata.years.length} detail={metadata.years.join(" · ")} />
        <StatCard label="Total topics" value={totalTopics} detail="normalized across both sections" />
        <StatCard label="Total subquestions" value={totalQuestions} detail="marks-bearing parts counted" />
        <StatCard label="Total mapped marks" value={totalMarks} detail="sum of extracted subquestion marks" />
      </div>

      <Card>
        <div className="grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <h2 className="text-xl font-black text-slate-900">Dashboard Summary</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              This dashboard analyzes previous-year questions for {metadata.courseCode} {metadata.courseName}. Topics were normalized so repeated variants such as "Turing test" and "general intelligence testing," or "Alarm Domain" and "Bayesian Network computation," are merged under common topic names.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="text-xs font-bold uppercase tracking-wide text-slate-500">Course metadata</div>
                <div className="mt-2 font-black text-slate-900">{metadata.courseCode} · {metadata.courseName}</div>
                <div className="text-sm text-slate-600">{metadata.exam}</div>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="text-xs font-bold uppercase tracking-wide text-slate-500">Sections detected</div>
                <div className="mt-2 font-black text-slate-900">Section A + Section B</div>
                <div className="text-sm text-slate-600">Separate scripts; answer choices vary by year</div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-[#048c4b]/20 bg-[#048c4b]/6 p-5">
            <div className="text-xs font-bold uppercase tracking-wide text-[#048c4b]">High-frequency topics</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {highTopics.slice(0, 12).map((topic) => (
                <Pill key={topic.topic} className="border-[#048c4b]/20 bg-white text-[#048c4b]">{topic.topic}</Pill>
              ))}
            </div>
            <p className="mt-4 text-sm text-[#048c4b]">Threshold used: asked in ≥3 years or ≥5 subquestions.</p>
          </div>
        </div>
      </Card>

      <div className="grid gap-6">
        <TopicTable title="Section A topics" stats={sectionAStats} />
        <TopicTable title="Section B topics" stats={sectionBStats} />
      </div>
    </div>
  );
}

function Insights() {
  return (
    <Card>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-black text-slate-900">Examiner Insights</h2>
          <p className="text-sm text-slate-500">Actionable study signals from repetitions, mark weight, and section placement.</p>
        </div>
        <Pill className="border-amber-200 bg-amber-50 text-amber-700">12 insights</Pill>
      </div>
      <div className="grid gap-3 lg:grid-cols-2">
        {insights.map((insight, idx) => (
          <div key={insight} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-sm font-black text-white">{idx + 1}</div>
            <p className="text-sm leading-6 text-slate-700">{insight}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

const tabs = [
  { id: "summary", label: "Summary" },
  { id: "a", label: "Section A" },
  { id: "b", label: "Section B" },
  { id: "frequency", label: "Frequency Analysis" },
  { id: "qa", label: "Section A Questions" },
  { id: "qb", label: "Section B Questions" },
  { id: "insights", label: "Examiner Insights" },
];

const visitCountStorageKey = "ai-question-dashboard-visit-count";

function readStoredNumber(key) {
  if (typeof window === "undefined") {
    return 0;
  }

  const rawValue = window.localStorage.getItem(key);
  const parsedValue = Number.parseInt(rawValue || "0", 10);
  return Number.isFinite(parsedValue) ? parsedValue : 0;
}

const dashboardCss = `
  .dashboard-root {
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .dashboard-root * {
    box-sizing: border-box;
  }

  .dashboard-root button {
    cursor: pointer;
  }

  .dashboard-root button:focus-visible {
    outline: 3px solid rgba(2, 199, 104, 0.35);
    outline-offset: 2px;
  }

  .dashboard-root table {
    border-collapse: separate;
  }

  .dashboard-root ::selection {
    background: rgba(2, 199, 104, 0.16);
  }

  .dashboard-root .question-card {
    transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
  }

  .dashboard-root .question-card:hover {
    transform: translateY(-1px);
    border-color: rgb(203 213 225);
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.07);
  }

  .dashboard-root .topic-toggle {
    transition: background-color 180ms ease, transform 180ms ease;
  }

  .dashboard-root .topic-toggle:hover {
    background: rgba(2, 199, 104, 0.06);
  }

  .dashboard-root .topic-panel {
    animation: dashboardSlideDown 180ms ease-out;
  }

  @keyframes dashboardSlideDown {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media print {
    .dashboard-root nav,
    .dashboard-root button {
      position: static !important;
    }

    .dashboard-root {
      background: white !important;
    }
  }
`;

export default function AIQuestionPatternDashboard() {
  const [active, setActive] = useState("summary");
  const [visitCount, setVisitCount] = useState(0);
  const all = useMemo(() => [...sectionA, ...sectionB], []);
  const sectionAStats = useMemo(() => makeStats(sectionA), []);
  const sectionBStats = useMemo(() => makeStats(sectionB), []);
  const allStats = useMemo(() => makeStats(all), [all]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const storedVisitCount = readStoredNumber(visitCountStorageKey) + 1;
    window.localStorage.setItem(visitCountStorageKey, String(storedVisitCount));
    setVisitCount(storedVisitCount);
  }, []);

  return (
    <div className="dashboard-root min-h-screen bg-white text-slate-900">
      <style>{dashboardCss}</style>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-6 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
          <div className="bg-gradient-to-br from-[#048c4b] via-[#048c4b] to-[#048c4b] p-7 text-white">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-white/90">Exam-question pattern dashboard</div>
                <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">{metadata.courseCode}: {metadata.courseName}</h1>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-white/90">{metadata.institution} · {metadata.department}</p>
              </div>
              <div className="rounded-2xl bg-white/15 p-4 text-sm backdrop-blur">
                <div className="font-black">{metadata.exam}</div>
                <div className="mt-1 text-white/90">Years: {metadata.years.join(", ")}</div>
                <div className="text-white/90">{metadata.sections.join(" · ")}</div>
              </div>
            </div>
          </div>
          <div className="grid gap-3 p-5 text-sm md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4"><span className="font-bold">Answer pattern:</span> {metadata.answerPattern}</div>
            <div className="rounded-2xl bg-slate-50 p-4"><span className="font-bold">Marks pattern:</span> {metadata.marksPattern}</div>
            <div className="rounded-2xl bg-slate-50 p-4"><span className="font-bold">Inference note:</span> {metadata.artifactNote}</div>
          </div>
        </header>

        <nav className="sticky top-0 z-10 mb-6 rounded-2xl border border-slate-200 bg-white/90 p-2 shadow-sm backdrop-blur">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`rounded-xl px-4 py-2 text-sm font-bold transition ${active === tab.id ? "bg-[#048c4b] text-white shadow" : "text-slate-600 hover:bg-[#048c4b]/6"}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </nav>

        <main>
          {active === "summary" && <Summary sectionAStats={sectionAStats} sectionBStats={sectionBStats} allStats={allStats} all={all} />}
          {active === "a" && <TopicTable title="Section A topics" stats={sectionAStats} />}
          {active === "b" && <TopicTable title="Section B topics" stats={sectionBStats} />}
          {active === "frequency" && <FrequencyAnalysis all={all} sectionAStats={sectionAStats} sectionBStats={sectionBStats} />}
          {active === "qa" && <QuestionList title="Section A Topicwise Exact Question List with Frequency" items={sectionA} />}
          {active === "qb" && <QuestionList title="Section B Topicwise Exact Question List with Frequency" items={sectionB} />}
          {active === "insights" && <Insights />}
        </main>

        <footer className="mt-8 rounded-3xl border border-[#048c4b]/20 bg-white/90 p-5 shadow-sm backdrop-blur">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#048c4b]">Visitor snapshot</div>
              <h2 className="mt-2 text-lg font-black text-slate-900">Page counter</h2>
              {/* <p className="mt-1 text-sm leading-6 text-slate-600">
                This count is stored in the browser only. It updates without any backend or database, so it reflects this deployment origin and active tabs rather than global site traffic.
              </p> */}
            </div>
            <div className="grid gap-3 sm:min-w-[320px] sm:grid-cols-2">
              <div className="rounded-2xl border border-[#048c4b]/20 bg-white p-4">
                <div className="flex items-center gap-3">
                  <div className="text-xs font-bold uppercase tracking-wide text-[#048c4b]">Visit count :</div>
                  <span className="text-3xl font-black text-[#048c4b]">{visitCount}</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
