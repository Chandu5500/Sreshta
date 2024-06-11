class User{
	public static void main(String[] args){
		AccDetails AD=new AccDetails();
		AD.AccNum=101;
		AD.IFSC="BKID5614";
		AD.Branch="Chirala";
		AD.Amount=1000;
		AD.UPI="6281172801@ybl";
		
		AD.A1.HouseName="Gavini";
		AD.A1.DoorNum="6-60";
		AD.A1.Mandal="Bapatla";
		AD.A1.City="Chirala";
		AD.A1.Code=523157;
		System.out.println(AD.A1.Code);
	}
}

