class User1{
	public static void main(String[] args){
		BDetails BD1=new BDetails();
		BDetails BD2=new BDetails();
		BD1.AccNum=101;
		BD1.Amount=2000;
		BD1.IFSC="BKID5614";
		BD1.Name="Chandu";
		BD1.BAddress=new BAddress();
		BD1.BAddress.Branch="Chirala";
		BD1.BAddress.IFSC="BKID5614";
		BD1.BAddress.Pincode=523157;
		System.out.println(BD1.BAddress.IFSC);
	}
}
		