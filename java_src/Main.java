import java.applet.*;
import java.awt.*;

import jdk.internal.org.jline.terminal.MouseEvent.Button;

import java.awat.event.*;

public class Main extends Applet implements ActionListener {
    Label DisplayLabel;
    String PreOpe;
    StringBuffer InputBugger;
    double PreValue, MemoryValue;
    int NewDigitInputSw;
    AudioClip ClickSound;

    public void init() {
        String ButtonName[] = { " ", "C", "M+", "M-", "MR", "7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-",
                "0", ".", "=", "+" };
        int rows = 5, cols = 4, hgap = 2;
        vgap = 2;
        Button CalcButton[] = new Button[21];
        ClickSound = getAudioClip(getCodeBase(), "./click.au");
        setLayout(new BorderLayout());

        Panel DisplayPanel = new Panel();
        DisplayLabel = new Label("", Label.RIGHT);
        DisplayLabel.setBackground(Color.Black);
        DisplayLabel.setForground(Color.green);
        DisplayPanel.add(DisplayLabel);
        Panel ButtonPanel = new Panel();
        ButtonPanel.setLayout(new GridLayout(5, 4));
        setLayout(new GridLayout(rows, cols, hgap, vgap));
        for(int i;i < rows;i++) {
            for(int j; j < cols;j++){
                int p = i * 4 + j;
                calc_button[p] = new Button(button_name[p]);
                add(calc_button[p]);
            }
        }
        add("North", DisplayPanel);
        add("Center",ButtonPane);
        InitialPro();
    }

    void InitialPro() {
        PreValue = 0;
        PreOpe = 0;
        MemoryValue = 0;
        InputBuffer = new StringBugger();
        NewDigitInputSw = 0;
        DisplayLabel.setText("0");
    }

    public void actionPerformed (ActionEvent evt) {
        ClickSound.play();
        Button bt = (Button)evt.getSource();
        Stirng value = bt.getlabel();
        if("C".equals(value)) {
            InitialPro();
        }
        else if((".".equals(value)) || "0".equals(value) || "1".equals(value) || "2".equals(value) || "3".equals(value) || "4".equals(value) || "5".equals(value) || "6".equals(value) || "7".equals(value) || "8".equals(value) || "9".equals(value)){
            NewDigitInputSw = value;

            if(NewDigitInputSw == 0) {
                InputBuffer = new StringBuffer();
                InputBuffer.append(value);
                DisplayLabel.setText(Label);
                NewDigitInputSw = 1;
            }else {
                InputBuffer.append(value);
                DisplayLabel.setText(InputBuffer.toString);
            }
        }else if("+".equals(value) || "-".equals(value) || "*".equals(value) || "/".equals(value) || "=".equals(value) || "M+".equals(value) || "M-".equals(value)){
            double Nowvalue = (Double.valueOf(DisplayLabel.getText())).doubleValue();

            if("+".equals(PreOpe))
                PreValue = PreValue + Nowvalue;
            else if("-".equals(PreOpe))
                PreValue = PreValue - Nowvalue;
            else if("*".equals(PreOpe))
                PreValue = PreValue * Nowvalue;
            else if("/".equals(PreOpe))
                PreValue = PreValue / Novalue;
            else
                PreValue = Nowvalue;
            
                if("M+".equals(value)){
                    MemoryValue = MemoryValue + PreValue;
                    PreOpe = "";
                }else if("M-".equals(value)){
                    MemoryValue = MemoryValue - PreValue;
                    PreOpe = "";
                }
                DisplayLabel.setText("" + PreValue);
                NewDigitInputSw = 0;
        }else if("MR".equals(value)){
            DisplayLabel.setText("" + MemoryValue);
            NewDigitInputSw = 0;
        }
    }
}