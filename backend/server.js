import express from "express";
import cors from "cors";
import { v4 as uuidv4} from "uuid";



const app = express();


app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET, PUT, POST, DELETE, PATCH",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  })
);
app.use(express.json());


let transactions = [];

app.get('/api/transaction', (req, resp) => {
    resp.json(transactions);
});


app.post('/api/add-transaction', (req, resp) => {
    const {title, amount, category, type} = req.body;
    if(!title || !amount || !type || !['income', 'expense'].includes(type)){
        return resp.status(400).json({error: 'Invalid transaction data'});
    }
    const transaction = {id: uuidv4(), title, amount: Number(amount), category, type, date: new Date()};
    transactions.push(transaction);
    resp.status(201).json(transaction);
});

app.delete('/api/transaction/:id',(req, resp) =>{
    const {id} = req.params;
    transactions = transactions.filter(t => t.id !== id);
    resp.json({ message: 'Transaction deleted'});
});

const port = 5000;

app.listen(port, () => console.log(`Server runnig on port ${port}`));