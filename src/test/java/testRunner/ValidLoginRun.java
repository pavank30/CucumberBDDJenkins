package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="Features",
		glue={"stepDefinitions"},
		plugin={"pretty","html:target/cucumber-html-report","json:target/cucumber-report/cucumber.json"},
		monochrome=true
		)
public class ValidLoginRun {

}
