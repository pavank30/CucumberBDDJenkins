package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class InvalidLoginStepDef {

	WebDriver driver;

	@Given("^User is on the homepage$")
	public void user_is_on_the_homepage() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "./driver/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://www.store.demoqa.com");
	}

	@When("^user naviagtes to LoginPage$")
	public void user_naviagtes_to_LoginPage() throws Throwable {
		driver.findElement(By.xpath(".//*[@id='account']/a")).click();
	}

	@When("^User enters  \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_UserName_and_Passowrd(String username, String password) throws Throwable {
		driver.findElement(By.xpath("//input[@id='log']")).sendKeys(username);
		driver.findElement(By.xpath("//input[@id='pwd']")).sendKeys(password);
		driver.findElement(By.xpath("//input[@id='login']")).click();

	}

	@Then("^Message displayed login successfull$")
	public void message_displayed_login_successfull() throws Throwable {
		driver.close();
	}


}
