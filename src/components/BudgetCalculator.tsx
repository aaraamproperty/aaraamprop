import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PiggyBank, TrendingUp, Home } from "lucide-react";

const BudgetCalculator = () => {
  const [monthlyIncome, setMonthlyIncome] = useState<number>(100000);
  const [monthlyExpenses, setMonthlyExpenses] = useState<number>(40000);
  const [downPaymentPercentage, setDownPaymentPercentage] = useState<number>(20);
  const [expectedPropertyValue, setExpectedPropertyValue] = useState<number>(8000000);
  
  const [affordableBudget, setAffordableBudget] = useState<number>(0);
  const [requiredDownPayment, setRequiredDownPayment] = useState<number>(0);
  const [maxLoanAmount, setMaxLoanAmount] = useState<number>(0);
  const [monthsToSaveDownPayment, setMonthsToSaveDownPayment] = useState<number>(0);

  const calculateBudget = () => {
    const disposableIncome = monthlyIncome - monthlyExpenses;
    const maxEMI = disposableIncome * 0.4; // 40% of disposable income
    
    // Assuming 8.5% interest rate and 20 years tenure
    const monthlyRate = 8.5 / (12 * 100);
    const months = 20 * 12;
    
    // Calculate max loan amount based on EMI capacity
    const maxLoan = (maxEMI * (Math.pow(1 + monthlyRate, months) - 1)) / 
                    (monthlyRate * Math.pow(1 + monthlyRate, months));
    
    const downPayment = (expectedPropertyValue * downPaymentPercentage) / 100;
    const totalBudget = maxLoan + downPayment;
    
    const savingCapacity = disposableIncome * 0.3; // 30% for savings
    const monthsToSave = savingCapacity > 0 ? Math.ceil(downPayment / savingCapacity) : 0;
    
    setAffordableBudget(totalBudget);
    setRequiredDownPayment(downPayment);
    setMaxLoanAmount(maxLoan);
    setMonthsToSaveDownPayment(monthsToSave);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto hover:shadow-lg transition-all duration-300">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <PiggyBank className="h-6 w-6 text-primary" />
          Budget Calculator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="budget" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="budget">Budget Calculator</TabsTrigger>
            <TabsTrigger value="affordability">Affordability Check</TabsTrigger>
          </TabsList>
          
          <TabsContent value="budget" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="monthlyIncome">Monthly Income (₹)</Label>
                <Input
                  id="monthlyIncome"
                  type="number"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                  className="text-center"
                  placeholder="1,00,000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="monthlyExpenses">Monthly Expenses (₹)</Label>
                <Input
                  id="monthlyExpenses"
                  type="number"
                  value={monthlyExpenses}
                  onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                  className="text-center"
                  placeholder="40,000"
                />
              </div>
            </div>

            <Button onClick={calculateBudget} className="w-full" size="lg">
              Calculate Budget
            </Button>

            {affordableBudget > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-1">
                    <Home className="h-4 w-4" />
                    Affordable Budget
                  </div>
                  <div className="text-xl font-bold text-primary">
                    {formatCurrency(affordableBudget)}
                  </div>
                </div>
                <div className="text-center p-4 bg-secondary/50 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Max Loan</div>
                  <div className="text-lg font-semibold text-blue-600">
                    {formatCurrency(maxLoanAmount)}
                  </div>
                </div>
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Down Payment</div>
                  <div className="text-lg font-semibold text-orange-600">
                    {formatCurrency(requiredDownPayment)}
                  </div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Saving Time</div>
                  <div className="text-lg font-semibold text-green-600">
                    {monthsToSaveDownPayment} months
                  </div>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="affordability" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="propertyValue">Expected Property Value (₹)</Label>
                <Input
                  id="propertyValue"
                  type="number"
                  value={expectedPropertyValue}
                  onChange={(e) => setExpectedPropertyValue(Number(e.target.value))}
                  className="text-center"
                  placeholder="80,00,000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="downPayment">Down Payment (%)</Label>
                <Input
                  id="downPayment"
                  type="number"
                  value={downPaymentPercentage}
                  onChange={(e) => setDownPaymentPercentage(Number(e.target.value))}
                  className="text-center"
                  placeholder="20"
                />
              </div>
            </div>

            <Button onClick={calculateBudget} className="w-full" size="lg">
              Check Affordability
            </Button>

            {affordableBudget > 0 && (
              <div className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg">
                <div className="text-center">
                  {expectedPropertyValue <= affordableBudget ? (
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-green-600">✓ Affordable!</div>
                      <p className="text-muted-foreground">
                        You can afford this property. Your budget capacity is {formatCurrency(affordableBudget)}
                        which is higher than the expected property value of {formatCurrency(expectedPropertyValue)}.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-red-600">⚠ Over Budget</div>
                      <p className="text-muted-foreground">
                        This property might be challenging to afford. Consider properties under {formatCurrency(affordableBudget)}
                        or increase your income/reduce expenses.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default BudgetCalculator;