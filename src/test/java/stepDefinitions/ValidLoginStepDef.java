package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ValidLoginStepDef 
{
	WebDriver driver;


	@Given("^Open Chrome and load page$")
	public void open_Chrome_and_load_page() throws Throwable {

		System.setProperty("webdriver.chrome.driver", "./driver/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.freecrm.com/index.html");
	}

	@When("^I enter valid username and password$")
	public void i_enter_valid_username_and_password() throws Throwable {
		driver.findElement(By.name("username")).sendKeys("pavank30");
		driver.findElement(By.name("password")).sendKeys("Welcome@123");

	}

	@When("^click on Login button$")
	public void click_on_Login_button() throws Throwable {
		JavascriptExecutor js = (JavascriptExecutor)driver;
		WebElement loginButton = driver.findElement(By.xpath("//div[@class='input-group-btn']//input[@value='Login']"));
		js.executeScript("arguments[0].click();", loginButton);
	}

	@Then("^user should login successfully$")
	public void user_should_login_successfully() throws Throwable {
		System.out.println(driver.getTitle());
		driver.close();
	}
}
