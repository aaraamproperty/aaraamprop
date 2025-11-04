import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, IndianRupee } from "lucide-react";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState<number>(5000000);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [loanTenure, setLoanTenure] = useState<number>(20);
  const [emi, setEMI] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const calculateEMI = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / (12 * 100);
    const months = loanTenure * 12;

    if (monthlyRate === 0) {
      const calculatedEMI = principal / months;
      setEMI(calculatedEMI);
      setTotalAmount(principal);
      setTotalInterest(0);
    } else {
      const emiNumerator = principal * monthlyRate * Math.pow(1 + monthlyRate, months);
      const emiDenominator = Math.pow(1 + monthlyRate, months) - 1;
      const calculatedEMI = emiNumerator / emiDenominator;
      
      const totalAmountPayable = calculatedEMI * months;
      const totalInterestPayable = totalAmountPayable - principal;

      setEMI(calculatedEMI);
      setTotalAmount(totalAmountPayable);
      setTotalInterest(totalInterestPayable);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto hover:shadow-lg transition-all duration-300">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <Calculator className="h-6 w-6 text-primary" />
          EMI Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="loanAmount">Loan Amount (₹)</Label>
            <Input
              id="loanAmount"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="text-center"
              placeholder="50,00,000"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="interestRate">Interest Rate (%)</Label>
            <Input
              id="interestRate"
              type="number"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="text-center"
              placeholder="8.5"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="loanTenure">Loan Tenure (Years)</Label>
            <Input
              id="loanTenure"
              type="number"
              value={loanTenure}
              onChange={(e) => setLoanTenure(Number(e.target.value))}
              className="text-center"
              placeholder="20"
            />
          </div>
        </div>

        <Button onClick={calculateEMI} className="w-full" size="lg">
          Calculate EMI
        </Button>

        {emi > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
            <div className="text-center p-4 bg-primary/5 rounded-lg">
              <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-1">
                <IndianRupee className="h-4 w-4" />
                Monthly EMI
              </div>
              <div className="text-2xl font-bold text-primary">
                {formatCurrency(emi)}
              </div>
            </div>
            <div className="text-center p-4 bg-secondary/50 rounded-lg">
              <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-1">
                <IndianRupee className="h-4 w-4" />
                Total Interest
              </div>
              <div className="text-xl font-semibold text-orange-600">
                {formatCurrency(totalInterest)}
              </div>
            </div>
            <div className="text-center p-4 bg-accent/10 rounded-lg">
              <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-1">
                <IndianRupee className="h-4 w-4" />
                Total Amount
              </div>
              <div className="text-xl font-semibold text-accent">
                {formatCurrency(totalAmount)}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default EMICalculator;